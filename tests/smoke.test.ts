import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";

const pkg = JSON.parse(readFileSync(resolve("package.json"), "utf8"));
assert.equal(pkg.name, "wi-nou-kapab");
console.log("smoke: package name ok");
