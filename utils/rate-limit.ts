import { LRUCache } from 'lru-cache';

const rateLimitCache = new LRUCache<string, number>({
  max: 500,
  ttl: 60 * 1000, 
});

export async function rateLimit(ip: string): Promise<void> {
  const key = `rateLimit:${ip}`;
  const limit = 30;

  const current = rateLimitCache.get(key) ?? 0;

  if (current >= limit) {
    throw new Error('Rate limit exceeded');
  }

  rateLimitCache.set(key, current + 1);
}
