// SEO and AI-discoverability baseline checks. Run with: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFileSync(join(root, name), "utf8");
const CANONICAL = "https://brand.naindev.com/";
const OG_IMAGE = "https://www.naindev.com/assets/images/og-cover-v5.jpg";

const html = read("index.html");
const head = html.slice(html.indexOf("<head>"), html.indexOf("</head>"));

function meta(attr, key) {
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="([^"]*)"`, "i");
  const m = head.match(re);
  return m ? m[1] : null;
}

test("exactly one canonical link pointing at the root", () => {
  const links = head.match(/<link\s+rel="canonical"[^>]*>/gi) ?? [];
  assert.equal(links.length, 1);
  assert.ok(links[0].includes(`href="${CANONICAL}"`));
});

test("meta description is 70-160 characters", () => {
  const d = meta("name", "description");
  assert.ok(d, "description missing");
  assert.ok(d.length >= 70 && d.length <= 160, `length ${d.length}`);
});

test("Open Graph tags are complete and consistent", () => {
  assert.equal(meta("property", "og:type"), "website");
  assert.equal(meta("property", "og:site_name"), "NainDev Brandbook");
  assert.equal(meta("property", "og:title"), "NainDev — Brandbook v1.5");
  assert.equal(meta("property", "og:description"), meta("name", "description"));
  assert.equal(meta("property", "og:url"), CANONICAL);
  assert.equal(meta("property", "og:image"), OG_IMAGE);
  assert.equal(meta("property", "og:image:width"), "1200");
  assert.equal(meta("property", "og:image:height"), "630");
});

test("Twitter card tags are present", () => {
  assert.equal(meta("name", "twitter:card"), "summary_large_image");
  assert.equal(meta("name", "twitter:title"), "NainDev — Brandbook v1.5");
  assert.equal(meta("name", "twitter:description"), meta("name", "description"));
  assert.equal(meta("name", "twitter:image"), OG_IMAGE);
});

test("author link points at the main site", () => {
  assert.match(head, /<link\s+rel="author"\s+href="https:\/\/www\.naindev\.com\/">/);
});

test("JSON-LD is a valid CreativeWork with escaped angle brackets", () => {
  const m = head.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(m, "JSON-LD missing");
  assert.ok(!m[1].includes("<"), "unescaped <");
  const data = JSON.parse(m[1]);
  assert.equal(data["@context"], "https://schema.org");
  assert.equal(data["@type"], "CreativeWork");
  assert.equal(data.name, "NainDev Brandbook");
  assert.equal(data.url, CANONICAL);
  assert.equal(data.publisher["@id"], "https://www.naindev.com/#organization");
  assert.equal(data.author["@id"], "https://www.naindev.com/#person");
});

test("robots.txt allows crawling and declares the sitemap", () => {
  assert.ok(existsSync(join(root, "robots.txt")), "robots.txt missing");
  const r = read("robots.txt");
  assert.match(r, /^User-agent: \*$/m);
  assert.match(r, /^Sitemap: https:\/\/brand\.naindev\.com\/sitemap\.xml$/m);
  assert.doesNotMatch(r, /^Disallow:\s*\S/m);
});

test("sitemap.xml lists the root URL", () => {
  assert.ok(existsSync(join(root, "sitemap.xml")), "sitemap.xml missing");
  assert.match(read("sitemap.xml"), /<loc>https:\/\/brand\.naindev\.com\/<\/loc>/);
});

test("llms.txt has H1, summary blockquote and key links", () => {
  assert.ok(existsSync(join(root, "llms.txt")), "llms.txt missing");
  const t = read("llms.txt");
  assert.match(t, /^# NainDev Brandbook$/m);
  assert.match(t, /^> .+/m);
  assert.ok(t.includes("https://github.com/Nain9Dev/brandbook"));
  assert.ok(t.includes("https://www.naindev.com/"));
});

test("deploy workflow publishes the repository root", () => {
  assert.match(read(".github/workflows/deploy.yml"), /path:\s*"\."/);
});
