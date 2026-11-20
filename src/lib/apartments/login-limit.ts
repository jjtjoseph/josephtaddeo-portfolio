export type LoginAttempt = { at: number; client: string; success: boolean };
export type LoginResult =
  | { status: 'accepted' | 'incorrect' }
  | { status: 'cooldown' | 'daily-limit'; retryAfter: number };

const cooldown = 15 * 60_000;
const day = 24 * 60 * 60_000;

// Keep only checks from the last 24 hours, at most 500 across all clients.
export function checkLogin(attempts: LoginAttempt[], client: string, now: number, verify: () => boolean): LoginResult {
  while (attempts.length && attempts[0].at <= now - day) attempts.shift();
  if (attempts.length >= 500) {
    return {status: 'daily-limit', retryAfter: Math.ceil((attempts[0].at + day - now) / 1000)};
  }
  let failures = 0;
  let lastFailure = 0;
  for (let i = attempts.length - 1; i >= 0 && attempts[i].at > now - 2 * cooldown; i--) {
    const attempt = attempts[i];
    if (attempt.client !== client) continue;
    if (attempt.success) break;
    if (failures === 0) lastFailure = attempt.at;
    if (lastFailure <= now - cooldown || attempt.at <= lastFailure - cooldown) break;
    if (++failures === 5) {
      return {status: 'cooldown', retryAfter: Math.ceil((lastFailure + cooldown - now) / 1000)};
    }
  }
  const success = verify();
  attempts.push({at: now, client, success});
  return {status: success ? 'accepted' : 'incorrect'};
}
