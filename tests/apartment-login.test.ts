import {test} from 'node:test';
import assert from 'node:assert/strict';
import {checkLogin, type LoginAttempt} from '../src/lib/apartments/login-limit';

test('fifth failure starts a full cooldown, without locking another client', () => {
  const history: LoginAttempt[] = [];
  const minute = 60_000;
  for (let i = 0; i < 5; i++) assert.equal(checkLogin(history, 'one', i * minute, () => false).status, 'incorrect');
  assert.equal(checkLogin(history, 'two', 5 * minute, () => true).status, 'accepted');
  assert.deepEqual(checkLogin(history, 'one', 18 * minute, () => assert.fail()), {status: 'cooldown', retryAfter: 60});
  assert.equal(checkLogin(history, 'one', 19 * minute, () => true).status, 'accepted');
});

test('the 501st check waits for the oldest check to leave the rolling 24h window', () => {
  const history: LoginAttempt[] = [];
  for (let i = 0; i < 500; i++) assert.equal(checkLogin(history, String(i % 3), i, () => true).status, 'accepted');
  const day = 86_400_000;
  assert.deepEqual(checkLogin(history, 'new', day - 1, () => assert.fail()), {status: 'daily-limit', retryAfter: 1});
  assert.equal(checkLogin(history, 'new', day, () => true).status, 'accepted');
  assert.equal(history.length, 500);
});
