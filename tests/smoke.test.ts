import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { PHONE_E164, EMAIL } from "../src/lib/contact";
import { ALL_SLUGS, getPage, getPillars } from "../src/lib/content";

const pkg = JSON.parse(readFileSync(resolve("package.json"), "utf8"));
assert.equal(pkg.name, "wi-nou-kapab");
assert.equal(PHONE_E164, "+50946305094");
assert.equal(EMAIL, "contact@winoukapab.org");
assert.equal(getPillars("en").length, 4);
assert.ok(getPage("fr", "actions").blocks.length > 0);

for (const locale of ["fr", "en"] as const) {
  for (const slug of ALL_SLUGS) {
    const p = getPage(locale, slug);
    assert.ok(p.title.length > 0, `${locale}/${slug}`);
  }
}

assert.ok(existsSync(resolve("public/logo-crest.jpg")));
assert.ok(existsSync(resolve("public/hero.jpg")));

console.log("smoke: all checks ok");
