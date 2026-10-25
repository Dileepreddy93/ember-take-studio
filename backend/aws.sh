#!/usr/bin/env bash
# Ember Take cloud voice engine on AWS Lambda: deploy, switch on/off, check usage, remove.
# Always uses the PERSONAL profile below, never any other profile or ambient credentials.
#
#   backend/aws.sh deploy        build + push the image, create/update the engine, its URL and the cost guard
#   backend/aws.sh stop          switch the engine off now (calls refused; nothing runs; the guard won't undo it)
#   backend/aws.sh start         switch it back on
#   backend/aws.sh status        on/off, URL and settings
#   backend/aws.sh usage         compute used today / this month against the free tier
#   backend/aws.sh budget EMAIL  email alert if the month's AWS bill passes $1 (or is forecast to)
#   backend/aws.sh destroy       delete the engine, guard, URL, roles, schedule, logs and image (nothing left to bill)
#
# Costs: Lambda bills only while a voice job runs, inside the always-free 400,000 GB-s and 1M requests a month.
# The cost guard (backend/guard.py, every 15 min) switches the engine off before that allowance is used up and
# back on the next day or month. The image in ECR is the one standing cost (~$0.10 per GB-month).
set -euo pipefail
PROFILE=bedrock-personal REGION=us-east-1
NAME=ember-take-voice ROLE=ember-take-voice-role GUARD=ember-take-guard GUARD_ROLE=ember-take-guard-role
MEMORY=3008 TIMEOUT=300 MAX_RUNS=2
ORIGINS='["https://dileepreddy93.github.io","http://localhost:8765","http://localhost:8799"]'
# Ignore any credentials or profile from the environment: only $PROFILE may be used.
unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN AWS_DEFAULT_PROFILE AWS_PROFILE
aws() { command aws --profile "$PROFILE" --region "$REGION" "$@"; }
here=$(cd "$(dirname "$0")/.." && pwd)
account=$(aws sts get-caller-identity --query Account --output text)
repo="$account.dkr.ecr.$REGION.amazonaws.com/$NAME"
TRUST='{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'
BASIC=arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

url() { aws lambda get-function-url-config --function-name "$NAME" --query FunctionUrl --output text 2>/dev/null || true; }
role() {  # role NAME → creates it once with basic logging; prints its ARN
  if ! aws iam get-role --role-name "$1" >/dev/null 2>&1; then
    aws iam create-role --role-name "$1" --assume-role-policy-document "$TRUST" >/dev/null
    aws iam attach-role-policy --role-name "$1" --policy-arn "$BASIC"
    sleep 10  # a new role takes a moment before Lambda accepts it
  fi
  echo "arn:aws:iam::$account:role/$1"
}
on() {
  aws lambda put-function-concurrency --function-name "$NAME" --reserved-concurrent-executions $MAX_RUNS >/dev/null 2>&1 \
    || { echo "WARNING: AWS could not reserve two executions; using the account concurrency quota. The scheduled usage guard is not a hard billing cap." >&2; aws lambda delete-function-concurrency --function-name "$NAME"; }
  aws lambda untag-resource --resource "arn:aws:lambda:$REGION:$account:function:$NAME" --tag-keys ember-take-guard 2>/dev/null || true
}
gbs() {  # gbs START_ISO → engine GB-seconds since then
  local ms; ms=$(aws cloudwatch get-metric-statistics --namespace AWS/Lambda --metric-name Duration --dimensions Name=FunctionName,Value=$NAME \
    --start-time "$1" --end-time "$(date -u +%Y-%m-%dT%H:%M:%SZ)" --period 3600 --statistics Sum --query 'sum(Datapoints[].Sum)' --output text)
  python3 -c "print(round(float('${ms/None/0}' or 0)/1000*$MEMORY/1024))"
}

case "${1:-status}" in
deploy)
  echo "▸ Profile $PROFILE, account ${account:0:4}…, region $REGION"
  aws ecr describe-repositories --repository-names "$NAME" >/dev/null 2>&1 || aws ecr create-repository --repository-name "$NAME" >/dev/null
  # Keep the newest two images so the preceding deployment remains available for rollback.
  aws ecr put-lifecycle-policy --repository-name "$NAME" --lifecycle-policy-text '{"rules":[{"rulePriority":1,"selection":{"tagStatus":"any","countType":"imageCountMoreThan","countNumber":2},"action":{"type":"expire"}}]}' >/dev/null
  echo "▸ Building and pushing the engine image"
  docker build -q -f "$here/backend/Dockerfile" -t "$NAME" "$here" >/dev/null
  aws ecr get-login-password | docker login --username AWS --password-stdin "${repo%%/*}" >/dev/null
  docker tag "$NAME:latest" "$repo:latest" && docker push -q "$repo:latest" >/dev/null
  engine_role=$(role "$ROLE")
  if aws lambda get-function --function-name "$NAME" >/dev/null 2>&1; then
    aws lambda update-function-code --function-name "$NAME" --image-uri "$repo:latest" >/dev/null
    aws lambda wait function-updated-v2 --function-name "$NAME"
    aws lambda update-function-configuration --function-name "$NAME" --memory-size $MEMORY --timeout $TIMEOUT --environment "Variables={AWS_LWA_ASYNC_INIT=true}" >/dev/null
  else
    aws lambda create-function --function-name "$NAME" --package-type Image --code ImageUri="$repo:latest" \
      --role "$engine_role" --memory-size $MEMORY --timeout $TIMEOUT --environment "Variables={AWS_LWA_ASYNC_INIT=true}" --architectures x86_64 >/dev/null
  fi
  aws lambda wait function-active-v2 --function-name "$NAME"
  aws logs create-log-group --log-group-name "/aws/lambda/$NAME" 2>/dev/null || true
  aws logs put-retention-policy --log-group-name "/aws/lambda/$NAME" --retention-in-days 3
  # FastAPI owns CORS, including preflight. Lambda URL CORS would duplicate response headers and break browsers.
  cors='{}'
  if [ -z "$(url)" ]; then
    aws lambda create-function-url-config --function-name "$NAME" --auth-type NONE --invoke-mode RESPONSE_STREAM --cors "$cors" >/dev/null
    aws lambda add-permission --function-name "$NAME" --statement-id public-url --action lambda:InvokeFunctionUrl --principal '*' --function-url-auth-type NONE >/dev/null
    # Since 2025 a public URL also needs InvokeFunction, limited to calls that come through the URL.
    aws lambda add-permission --function-name "$NAME" --statement-id public-url-invoke --action lambda:InvokeFunction --principal '*' --invoked-via-function-url >/dev/null \
      || { echo "✗ Could not allow URL calls: update the AWS CLI (it needs --invoked-via-function-url), then run deploy again."; exit 1; }
  else
    aws lambda update-function-url-config --function-name "$NAME" --auth-type NONE --invoke-mode RESPONSE_STREAM --cors "$cors" >/dev/null
  fi
  on

  echo "▸ Cost guard"
  guard_role=$(role "$GUARD_ROLE")
  aws iam put-role-policy --role-name "$GUARD_ROLE" --policy-name ember-take-guard --policy-document "{\"Version\":\"2012-10-17\",\"Statement\":[
    {\"Effect\":\"Allow\",\"Action\":[\"lambda:GetFunction\",\"lambda:ListTags\",\"lambda:TagResource\",\"lambda:UntagResource\",\"lambda:GetFunctionConcurrency\",\"lambda:PutFunctionConcurrency\",\"lambda:DeleteFunctionConcurrency\"],\"Resource\":\"arn:aws:lambda:$REGION:$account:function:$NAME\"},
    {\"Effect\":\"Allow\",\"Action\":\"cloudwatch:GetMetricStatistics\",\"Resource\":\"*\"}]}"
  zip=$(mktemp -d)/guard.zip && (cd "$here/backend" && python3 -c "import zipfile,sys;z=zipfile.ZipFile(sys.argv[1],'w');z.write('guard.py')" "$zip")
  genv="Variables={ENGINE=$NAME,MEMORY_MB=$MEMORY,MAX_RUNS=$MAX_RUNS}"
  if aws lambda get-function --function-name "$GUARD" >/dev/null 2>&1; then
    aws lambda update-function-code --function-name "$GUARD" --zip-file "fileb://$zip" >/dev/null
    aws lambda wait function-updated-v2 --function-name "$GUARD"
    aws lambda update-function-configuration --function-name "$GUARD" --environment "$genv" >/dev/null
  else
    aws lambda create-function --function-name "$GUARD" --runtime python3.12 --handler guard.handler --zip-file "fileb://$zip" \
      --role "$guard_role" --memory-size 128 --timeout 30 --environment "$genv" >/dev/null
  fi
  aws lambda wait function-active-v2 --function-name "$GUARD"
  aws logs create-log-group --log-group-name "/aws/lambda/$GUARD" 2>/dev/null || true
  aws logs put-retention-policy --log-group-name "/aws/lambda/$GUARD" --retention-in-days 3
  rule=$(aws events put-rule --name "$GUARD" --schedule-expression 'rate(15 minutes)' --query RuleArn --output text)
  aws lambda add-permission --function-name "$GUARD" --statement-id schedule --action lambda:InvokeFunction --principal events.amazonaws.com --source-arn "$rule" >/dev/null 2>&1 || true
  aws events put-targets --rule "$GUARD" --targets "Id=guard,Arn=arn:aws:lambda:$REGION:$account:function:$GUARD" >/dev/null
  echo "✓ Engine on: $(url)"
  ;;
stop)
  aws lambda put-function-concurrency --function-name "$NAME" --reserved-concurrent-executions 0 >/dev/null
  echo "✓ Engine off. Online visitors get voices made on their own device. 'backend/aws.sh start' switches it back on."
  ;;
start) on; echo "✓ Engine on: $(url)" ;;
status)
  if ! aws lambda get-function --function-name "$NAME" >/dev/null 2>&1; then echo "Engine not deployed (run: backend/aws.sh deploy)"; exit 0; fi
  c=$(aws lambda get-function-concurrency --function-name "$NAME" --query ReservedConcurrentExecutions --output text)
  g=$(aws lambda list-tags --resource "arn:aws:lambda:$REGION:$account:function:$NAME" --query 'Tags."ember-take-guard"' --output text)
  [ "$c" = "0" ] && state="OFF$([ "$g" = off ] && echo ' (cost guard: back on next day/month)' || echo ' (stopped by you)')" || state=ON
  echo "Engine $state · $(url)"
  aws lambda get-function-configuration --function-name "$NAME" --query '{memoryMB:MemorySize,timeoutS:Timeout,updated:LastModified}' --output table
  ;;
usage)
  d=$(gbs "$(date -u +%Y-%m-%dT00:00:00Z)") m=$(gbs "$(date -u +%Y-%m-01T00:00:00Z)")
  echo "Compute today: $d GB-s (guard limit 10,000) · this month: $m GB-s (guard limit 320,000; free tier 400,000)"
  ;;
budget)
  email=${2:?usage: backend/aws.sh budget you@example.com}
  aws budgets create-budget --account-id "$account" \
    --budget '{"BudgetName":"ember-take-monthly","BudgetLimit":{"Amount":"1","Unit":"USD"},"TimeUnit":"MONTHLY","BudgetType":"COST"}' \
    --notifications-with-subscribers "[{\"Notification\":{\"NotificationType\":\"ACTUAL\",\"ComparisonOperator\":\"GREATER_THAN\",\"Threshold\":80},\"Subscribers\":[{\"SubscriptionType\":\"EMAIL\",\"Address\":\"$email\"}]},{\"Notification\":{\"NotificationType\":\"FORECASTED\",\"ComparisonOperator\":\"GREATER_THAN\",\"Threshold\":100},\"Subscribers\":[{\"SubscriptionType\":\"EMAIL\",\"Address\":\"$email\"}]}]"
  echo "✓ Alert set: email to $email at 80% of \$1 this month, or if forecast to pass \$1"
  ;;
destroy)
  aws events remove-targets --rule "$GUARD" --ids guard >/dev/null 2>&1 || true
  aws events delete-rule --name "$GUARD" 2>/dev/null || true
  for fn in "$GUARD" "$NAME"; do aws lambda delete-function --function-name "$fn" 2>/dev/null || true; aws logs delete-log-group --log-group-name "/aws/lambda/$fn" 2>/dev/null || true; done
  aws iam delete-role-policy --role-name "$GUARD_ROLE" --policy-name ember-take-guard 2>/dev/null || true
  for r in "$GUARD_ROLE" "$ROLE"; do aws iam detach-role-policy --role-name "$r" --policy-arn "$BASIC" 2>/dev/null || true; aws iam delete-role --role-name "$r" 2>/dev/null || true; done
  aws ecr delete-repository --repository-name "$NAME" --force >/dev/null 2>&1 || true
  echo "✓ Removed. Nothing of the engine remains in the account."
  ;;
*) sed -n '2,14p' "$0"; exit 1 ;;
esac
