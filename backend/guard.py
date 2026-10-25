"""Ember Take cost guard: keeps the cloud voice engine inside Lambda's always-free monthly compute.

Runs every 15 minutes (EventBridge schedule, deployed by backend/aws.sh). It totals the engine's compute
(Duration × memory, in GB-seconds) for today and this month. Past either limit it switches the engine off
(reserved concurrency 0) and tags it; when a new day or month brings usage back under the limits, it switches
the engine on again. A manual `backend/aws.sh stop` carries no tag, so the guard never overrides it.
While the engine is off, the online studio makes voices on each visitor's device instead.

The Duration metric leaves out cold-start time, so the limits keep a margin under the 400,000 GB-s free tier.
"""
import datetime as dt
import os

import boto3

ENGINE = os.environ['ENGINE']
MEMORY_GB = float(os.environ['MEMORY_MB']) / 1024
MAX_RUNS = int(os.environ['MAX_RUNS'])
DAY_GBS = float(os.environ.get('DAY_GBS', '10000'))      # ~ a 31st of the free tier, less a cold-start margin
MONTH_GBS = float(os.environ.get('MONTH_GBS', '320000'))  # 80% of the 400,000 GB-s monthly free tier
TAG = 'ember-take-guard'

lam, cw = boto3.client('lambda'), boto3.client('cloudwatch')


def gb_seconds(start, end):
    if end <= start:
        return 0.0
    points = cw.get_metric_statistics(Namespace='AWS/Lambda', MetricName='Duration', Dimensions=[{'Name': 'FunctionName', 'Value': ENGINE}],
                                      StartTime=start, EndTime=end, Period=3600, Statistics=['Sum'])['Datapoints']
    return sum(p['Sum'] for p in points) / 1000 * MEMORY_GB


def handler(event, context):
    now = dt.datetime.now(dt.timezone.utc)
    day = now.replace(hour=0, minute=0, second=0, microsecond=0)
    used_day, used_month = gb_seconds(day, now), gb_seconds(day.replace(day=1), now)
    arn = lam.get_function(FunctionName=ENGINE)['Configuration']['FunctionArn']
    guarded = lam.list_tags(Resource=arn).get('Tags', {}).get(TAG) == 'off'
    reserved = lam.get_function_concurrency(FunctionName=ENGINE).get('ReservedConcurrentExecutions')
    over = used_day > DAY_GBS or used_month > MONTH_GBS
    action = 'no change'
    if over and reserved != 0:
        lam.put_function_concurrency(FunctionName=ENGINE, ReservedConcurrentExecutions=0)
        lam.tag_resource(Resource=arn, Tags={TAG: 'off'})
        action = 'switched off (limit reached)'
    elif not over and guarded:
        try:
            lam.put_function_concurrency(FunctionName=ENGINE, ReservedConcurrentExecutions=MAX_RUNS)
        except lam.exceptions.InvalidParameterValueException:  # account quota too low to reserve: just lift the 0
            lam.delete_function_concurrency(FunctionName=ENGINE)
        lam.untag_resource(Resource=arn, TagKeys=[TAG])
        action = 'switched on (back under the limits)'
    report = {'today_gbs': round(used_day), 'month_gbs': round(used_month), 'day_limit': DAY_GBS, 'month_limit': MONTH_GBS, 'action': action}
    print(report)
    return report
