/**
 * Simple in-memory rate limiter.
 * Suitable for single-server deployments (VPS, single Node instance).
 * For multi-instance deployments, replace with Redis-backed solution.
 */

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

// Periodic cleanup so the Map does not grow unboundedly
const CLEANUP_INTERVAL = 5 * 60 * 1000; // every 5 minutes
let cleanupStarted = false;

function startCleanup() {
  if (cleanupStarted || typeof setInterval === 'undefined') return;
  cleanupStarted = true;
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt < now) buckets.delete(key);
    }
  }, CLEANUP_INTERVAL).unref?.();
}

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
};

export function rateLimit(
  identifier: string,
  options: { limit: number; windowMs: number },
): RateLimitResult {
  startCleanup();
  const now = Date.now();
  const bucket = buckets.get(identifier);

  if (!bucket || bucket.resetAt < now) {
    const fresh: Bucket = {
      count: 1,
      resetAt: now + options.windowMs,
    };
    buckets.set(identifier, fresh);
    return {
      ok: true,
      remaining: options.limit - 1,
      resetAt: fresh.resetAt,
      retryAfterSeconds: 0,
    };
  }

  bucket.count += 1;

  const remaining = Math.max(0, options.limit - bucket.count);
  const ok = bucket.count <= options.limit;

  return {
    ok,
    remaining,
    resetAt: bucket.resetAt,
    retryAfterSeconds: ok ? 0 : Math.ceil((bucket.resetAt - now) / 1000),
  };
}

/**
 * Extracts the best-guess client IP from the request headers.
 * Trust order: x-forwarded-for (proxy/CDN) > x-real-ip (nginx) > fallback.
 * In production behind a reverse proxy, ensure it sets these headers properly.
 */
export function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]!.trim();

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp;

  return 'unknown';
}
