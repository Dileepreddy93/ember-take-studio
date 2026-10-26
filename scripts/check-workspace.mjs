import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const out=new URL('../artifacts/workspace-review/',import.meta.url).pathname;await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const errors=[];const results=[];
try{
 for(const [width,height] of [[1440,1000],[1024,768],[820,1180],[768,1024],[390,844],[360,740],[320,640]]){
  console.log(`Checking ${width} × ${height}`);
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.STUDIO_TEST_URL||'http://127.0.0.1:8877');await page.waitForFunction(()=>document.querySelector('#loading').hidden,{timeout:30000});
  await page.waitForTimeout(400);
  const bounds=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,body:document.body.scrollHeight,viewport:innerHeight,canvas:document.querySelector('#film').getBoundingClientRect().toJSON()}));
  assert.equal(bounds.overflow,false,`horizontal overflow at ${width}`);
  assert.ok(bounds.canvas.height>80,`preview too small at ${width}`);
  await page.screenshot({path:out+`preview-${width}.png`});
  if(width<=800){
   await page.click('[data-view=story]');await page.locator('.cue').first().click();await page.locator('#dialogue').waitFor({state:'visible'});
   assert.equal(await page.getAttribute('body','data-mobile-view'),'settings');
   await page.locator('#dialogue').fill('A better studio starts with a small story.');await page.click('#apply-line');
   await page.click('[data-view=story]');assert.match(await page.locator('.cue').first().textContent(),/A better studio/);
   await page.reload();await page.waitForFunction(()=>document.querySelector('#loading').hidden);await page.click('[data-view=story]');assert.match(await page.locator('.cue').first().textContent(),/A better studio/);
   await page.click('[data-step=world]');await page.locator('#tab-world').waitFor({state:'visible'});
   await page.screenshot({path:out+`customize-${width}.png`});
   await page.click('[data-view=preview]');await page.click('[data-mobile-export]');await page.locator('#export-dialog').waitFor({state:'visible'});
  }else{
   await page.locator('.cue').first().click();await page.fill('#dialogue','A better studio starts with a small story.');await page.click('#apply-line');assert.match(await page.locator('.cue').first().textContent(),/A better studio/);
   await page.click('[data-tab=world]');await page.locator('#tab-world').waitFor({state:'visible'});await page.click('[data-tab=cast]');await page.click('[data-tab=voice]');await page.click('[data-tab=film]');await page.click('[data-tab=line]');
   await page.focus('[data-tab=line]');await page.keyboard.press('ArrowRight');assert.equal(await page.getAttribute('[data-tab=cast]','aria-selected'),'true');
   await page.click('#script-open');await page.locator('#script-dialog').waitFor({state:'visible'});
  }
  results.push({width,height,...bounds});await page.close();
 }
 assert.deepEqual(errors,[]);await writeFile(out+'verification.json',JSON.stringify({results,pageErrors:errors},null,2));console.log(JSON.stringify({results,pageErrors:errors},null,2));
}finally{await browser.close();}
