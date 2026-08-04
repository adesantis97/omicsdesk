#!/usr/bin/env node
/**
 * Ping IndexNow with every URL in the live sitemap.
 *
 * IndexNow is the push protocol Bing, Yandex, Seznam and Naver share: instead of
 * waiting for a crawl, you tell them what changed and they fetch it within hours.
 * Google does not participate, but Bing's index is what feeds Copilot and
 * ChatGPT search, which is where a growing share of "how do I fix X" questions
 * now land.
 *
 * Auth is the key file at https://omicsdesk.com/<KEY>.txt containing exactly the
 * key. It must be live (deployed) before a submission is accepted, so run this
 * AFTER the deploy, not before.
 *
 * Usage:
 *   node scripts/indexnow.mjs            # submit every sitemap URL
 *   node scripts/indexnow.mjs --dry-run  # print what would be submitted
 *   node scripts/indexnow.mjs https://omicsdesk.com/blog/some-post/   # only these
 */

const KEY = '4179fa604e27445f838cf157c63704aa';
const HOST = 'omicsdesk.com';
const SITE = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const explicit = args.filter((a) => a.startsWith('http'));

async function sitemapUrls() {
  const index = await fetch(`${SITE}/sitemap-index.xml`).then((r) => r.text());
  const sitemaps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const urls = [];
  for (const sm of sitemaps) {
    const body = await fetch(sm).then((r) => r.text());
    urls.push(...[...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  return [...new Set(urls)];
}

const urlList = explicit.length ? explicit : await sitemapUrls();

if (urlList.length === 0) {
  console.error('No URLs to submit (is the sitemap reachable?)');
  process.exit(1);
}

console.log(`IndexNow: ${urlList.length} URL(s)`);
for (const u of urlList) console.log('  ' + u);

if (dryRun) {
  console.log('\n--dry-run, nothing submitted.');
  process.exit(0);
}

// The key file must already be serving, otherwise the endpoint answers 403.
const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
const keyBody = keyCheck.ok ? (await keyCheck.text()).trim() : '';
if (keyBody !== KEY) {
  console.error(
    `\nKey file ${SITE}/${KEY}.txt is not live yet (status ${keyCheck.status}).` +
      ' Deploy first, then re-run.',
  );
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted but key still being validated. Both are fine.
console.log(`\nIndexNow responded ${res.status} ${res.statusText}`);
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
