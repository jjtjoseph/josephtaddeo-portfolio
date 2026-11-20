import {test} from 'node:test';
import assert from 'node:assert/strict';
import {scryptSync} from 'node:crypto';
import {issueToken,validToken,passwordMatches} from '../src/lib/apartments/crypto';
import {validateApartment,safeUrl} from '../src/lib/apartments/model';
const secret='x'.repeat(64),hash='salt:'+scryptSync('correct password','salt',64).toString('hex');
test('password verification rejects wrong and malformed hashes',()=>{assert.equal(passwordMatches('correct password',hash),true);assert.equal(passwordMatches('wrong',hash),false);assert.equal(passwordMatches('correct password','invalid'),false);});
test('sessions reject tampering, expiration and password rotation',()=>{const now=Date.now(),token=issueToken(secret,hash,now);assert.ok(validToken(token,secret,hash,now));assert.equal(validToken(token+'x',secret,hash,now),false);assert.equal(validToken(token,secret,hash,now+8*86400000),false);assert.equal(validToken(token,secret,hash+'rotated',now),false);assert.equal(validToken(token,'',hash,now),false);});
test('links reject executable schemes',()=>{assert.equal(safeUrl('javascript:alert(1)'), '');assert.equal(safeUrl('data:text/html,test'),'');assert.equal(safeUrl('https://streeteasy.com/'),'https://streeteasy.com/');});
test('record validation fails closed on invalid status and partial coordinates',()=>{assert.throws(()=>validateApartment({id:'a',address:'85 Bergen',status:'invented'}));assert.throws(()=>validateApartment({id:'a',address:'85 Bergen',status:'New',lat:40.7,lng:null}));});

test('default search excludes unverified, over-budget and rejected historical leads',async()=>{
 const {scopeReasons}=await import('../src/lib/apartments/model');
 const a={neighborhood:'East Village',rent:3200,status:'New'} as import('../src/lib/apartments/model').Apartment;
 assert.deepEqual(scopeReasons(a),[]);
 assert.ok(scopeReasons({...a,neighborhood:''}).includes('Neighborhood unverified'));
 assert.ok(scopeReasons({...a,neighborhood:'Flatbush'}).includes('Outside requested neighborhoods'));
 assert.ok(scopeReasons({...a,rent:4400}).includes('Outside $2,800–$3,600'));
 assert.ok(scopeReasons({...a,status:'Passed'}).includes('Passed'));
});
