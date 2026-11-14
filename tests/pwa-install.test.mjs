// Install contract (specs/next-pwa-install, INS-001 to INS-005). Run with: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(root, "index.html"), "utf8");
const head = html.slice(html.indexOf("<head>"), html.indexOf("</head>"));
const manifest = JSON.parse(readFileSync(join(root, "manifest.webmanifest"), "utf8"));

function meta(name) {
  const m = head.match(new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, "i"));
  return m ? m[1] : null;
}

// Width and height of a PNG, read from its IHDR chunk (no image library).
function pngSize(path) {
  const buf = readFileSync(path);
  assert.equal(buf.toString("latin1", 1, 4), "PNG", `${path} is not a PNG`);
  return `${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}`;
}

test("INS-002: manifest names the app and opens it standalone from the root", () => {
  assert.equal(manifest.name, "NainDev Brandbook");
  assert.equal(manifest.short_name, "NainBrand");
  assert.equal(manifest.description, meta("description"));
  assert.equal(manifest.lang, "es");
  assert.equal(manifest.dir, "ltr");
  assert.equal(manifest.id, "./");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.theme_color, "#edf1f6");
  assert.equal(manifest.background_color, "#edf1f6");
  assert.ok(!("prefer_related_applications" in manifest));
});

test("INS-003: declared icons exist at their declared size, one purpose each", () => {
  assert.deepEqual(
    manifest.icons.map(({ src, sizes, type, purpose }) => ({ src, sizes, type, purpose })),
    [
      { src: "./icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "./icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "./icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  );
  for (const icon of manifest.icons) {
    assert.equal(pngSize(join(root, icon.src)), icon.sizes, icon.src);
  }
  assert.equal(pngSize(join(root, "icons/apple-touch-icon.png")), "180x180");
});

test("INS-001 and INS-004: the page links the manifest and carries the iOS tags", () => {
  assert.match(head, /<link\s+rel="manifest"\s+href="manifest\.webmanifest">/);
  assert.match(head, /<link\s+rel="apple-touch-icon"\s+href="icons\/apple-touch-icon\.png">/);
  assert.equal(meta("mobile-web-app-capable"), "yes");
  assert.equal(meta("apple-mobile-web-app-capable"), "yes");
  assert.equal(meta("apple-mobile-web-app-title"), manifest.short_name);
  assert.equal(meta("apple-mobile-web-app-status-bar-style"), "default");
  assert.equal(meta("theme-color"), manifest.theme_color);
});

test("INS-005: the service worker is not registered", () => {
  assert.ok(!/serviceWorker/.test(html));
});
