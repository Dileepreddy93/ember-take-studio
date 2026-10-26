import test from 'node:test';
import assert from 'node:assert/strict';
import {byteRange,jobProject,allowLocalRequest} from '../server-guards.js';
import {DEFAULT_PROJECT} from '../dist/timeline.js';
test('video ranges support seeking and suffixes and reject invalid offsets',()=>{
 assert.deepEqual(byteRange('bytes=10-19',100),{start:10,end:19});
 assert.deepEqual(byteRange('bytes=90-',100),{start:90,end:99});
 assert.deepEqual(byteRange('bytes=-20',100),{start:80,end:99});
 assert.deepEqual(byteRange('bytes=90-999',100),{start:90,end:99});
 for(const range of ['bytes=100-','bytes=20-10','bytes=-0','bytes=-','bytes=0-1,5-9','no-range'])assert.equal(byteRange(range,100),null);
 assert.equal(byteRange('bytes=0-',0),null);
});
test('invalid projects fail before entering the job queue',()=>{
 assert.equal(jobProject(DEFAULT_PROJECT).version,3);
 for(const input of [null,{}, {...DEFAULT_PROJECT,duration:Infinity},{...DEFAULT_PROJECT,cues:[]}])assert.throws(()=>jobProject(input),e=>e.status===400);
});
test('local server rejects foreign origins and rebinding hosts',()=>{
 assert.ok(allowLocalRequest({host:'127.0.0.1:8877'},8877));
 assert.ok(allowLocalRequest({host:'localhost:8877',origin:'http://localhost:8877'},8877));
 assert.equal(allowLocalRequest({host:'evil.example:8877'},8877),false);
 assert.equal(allowLocalRequest({host:'localhost:8877',origin:'https://evil.example'},8877),false);
 assert.equal(allowLocalRequest({host:'localhost:8877','sec-fetch-site':'cross-site'},8877),false);
});
