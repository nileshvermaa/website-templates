// Downloads all highnote.com assets into public/. Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = "https://highnote.com";
const MEDIA = `${ROOT}/_next/static/media`;
const PUB = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// [remoteUrl, localPathUnderPublic]
const assets = [
  // ---- Fonts (self-hosted woff2) ----
  [`${MEDIA}/HelveticaNowDisplayRegular.2o-r-2ud9rf3i.woff2`, "fonts/HelveticaNowDisplay-Regular.woff2"],
  [`${MEDIA}/HelveticaNowDisplayMedium.0gax-m4l5kh06.woff2`, "fonts/HelveticaNowDisplay-Medium.woff2"],
  [`${MEDIA}/HelveticaNowTextRegular.1fm2eui0-82na.woff2`, "fonts/HelveticaNowText-Regular.woff2"],
  [`${MEDIA}/HelveticaNowTextMedium.3bl8djelrh9z8.woff2`, "fonts/HelveticaNowText-Medium.woff2"],
  [`${MEDIA}/HelveticaNowTextBold.34fh4ixmca3gp.woff2`, "fonts/HelveticaNowText-Bold.woff2"],
  [`${MEDIA}/spacemono.1eq6w9sf28ytn.woff2`, "fonts/SpaceMono-Regular.woff2"],
  // ---- SEO ----
  [`${ROOT}/favicon.svg`, "seo/favicon.svg"],
  [`${ROOT}/img/og/home-og.jpg`, "seo/home-og.jpg"],
  // ---- Brand / arrows ----
  [`${ROOT}/img/highnote-black.svg`, "img/highnote-black.svg"],
  [`${ROOT}/img/brand/highnote-circle-white.svg`, "img/highnote-circle-white.svg"],
  [`${ROOT}/img/black-arrow-icon.svg`, "img/black-arrow-icon.svg"],
  [`${ROOT}/img/white-arrow-icon.svg`, "img/white-arrow-icon.svg"],
  // ---- Trust logos (marquee) ----
  ...["lowes","bny","splitit","netevia","triplink","fluz","spoton","mudflap","samsung","coinflow","fillip","givecard"]
    .map((n) => [`${ROOT}/img/logo-${n}.svg`, `img/logo-${n}.svg`]),
  // ---- Products graphic ----
  [`${ROOT}/img/home-acquiring-graphic.svg`, "img/home-acquiring-graphic.svg"],
  // ---- Industry / use-case card images ----
  ...["solutions-ap","solutions-spend","solutions-fleet","solutions-travel","use-case-platforms","use-case-embedded-finance","solutions-branded-credit","solutions-saas"]
    .map((n) => [`${ROOT}/img/${n}.webp`, `img/${n}.webp`]),
  // ---- Customers (quotes + video logos) ----
  [`${ROOT}/img/logo-workwhile.svg`, "img/logo-workwhile.svg"],
  [`${ROOT}/img/logo-coinflow-white.png`, "img/logo-coinflow-white.png"],
  [`${ROOT}/img/logo-lowes-blue.svg`, "img/logo-lowes-blue.svg"],
  [`${ROOT}/img/logo-netevia-quote.svg`, "img/logo-netevia-quote.svg"],
  [`${ROOT}/img/logo-splitit-quote.png`, "img/logo-splitit-quote.png"],
  [`${ROOT}/img/logo-bny-quote.svg`, "img/logo-bny-quote.svg"],
  // ---- Developer feature icons ----
  ...["graphql","notifications","dashboard","security"].map((n) => [`${ROOT}/img/icon-${n}.svg`, `img/icon-${n}.svg`]),
  // ---- Videos ----
  [`${ROOT}/video/workwhile-hero-preview.mp4`, "video/workwhile-hero-preview.mp4"],
  [`${ROOT}/video/coinflow-hero-preview.mp4`, "video/coinflow-hero-preview.mp4"],
  // ---- Blog thumbnails (graphassets CDN) ----
  ["https://us-west-2.graphassets.com/A2KC6JhLTC2sboBUmSab6z/cmoit10dc5grr07mtrjdrkanu", "img/blog-lowes-fintech.jpg"],
  ["https://us-west-2.graphassets.com/A2KC6JhLTC2sboBUmSab6z/cmolga4dj2x1c07n2j7a0hlcd", "img/blog-commercial-card-travel.jpg"],
  ["https://us-west-2.graphassets.com/A2KC6JhLTC2sboBUmSab6z/cmmp0lger2ti707n3ub7x4l1q", "img/blog-highnote-vs-tabapay.jpg"],
];

async function fetchOne([url, rel]) {
  const dest = join(PUB, rel);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0", Referer: ROOT } });
    if (!res.ok) return { rel, ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    return { rel, ok: true, bytes: buf.length };
  } catch (e) {
    return { rel, ok: false, err: String(e) };
  }
}

async function run() {
  const results = [];
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    results.push(...(await Promise.all(batch.map(fetchOne))));
  }
  const ok = results.filter((r) => r.ok);
  const fail = results.filter((r) => !r.ok);
  for (const r of ok) console.log(`  ok  ${r.rel} (${(r.bytes / 1024).toFixed(1)} KB)`);
  for (const r of fail) console.log(`FAIL  ${r.rel} — ${r.status || r.err}`);
  console.log(`\nDone: ${ok.length} ok, ${fail.length} failed, ${results.length} total.`);
}
run();
