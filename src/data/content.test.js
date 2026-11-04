import { test } from "node:test"
import assert from "node:assert/strict"
import { existsSync } from "node:fs"
import { projects, usedIn, waybillLink } from "./content.js"

test("every project has what its label needs", () => {
  assert.equal(new Set(projects.map((p) => p.title)).size, projects.length, "titles must be unique")
  for (const p of projects) {
    assert.match(p.repo, /^https:\/\/github\.com\/Aryan4GIT\//, `${p.title} needs a repo link`)
    assert.ok(p.to, `${p.title} needs a "to" line`)
    assert.ok(p.sort.every((s) => ["ai", "backend", "web"].includes(s)), `${p.title} has an unknown sort`)
    if (p.live) assert.match(p.live, /^https:\/\//, `${p.title} has a bad live link`)
    if (p.image) assert.ok(existsSync(`public${p.image}`), `${p.title} image is missing`)
  }
})

test("usedIn matches whole names only", () => {
  const titles = (skill) => usedIn(skill).map((p) => p.title)
  assert.ok(titles("Go").includes("Medlen-AI"), "Go should match Go (Gin)")
  assert.ok(titles("React").includes("OmniMind"), "React should match React 19")
  assert.ok(titles("RAG Pipelines").includes("Medlen-AI"), "RAG Pipelines should match RAG")
  assert.ok(!titles("Go").includes("Gap Stealer"), "Go must not match React or Firebase tags")
  assert.deepEqual(titles("R"), [], "R must not match React")
  assert.deepEqual(titles("Java"), [], "Java must not match JavaScript")
})

test("waybillLink encodes what the visitor types", () => {
  const link = waybillLink(" Sam & Co ", "Need an API?\nThanks")
  assert.ok(link.startsWith("mailto:aryansingh73321@gmail.com?subject=Hello%20from%20Sam%20%26%20Co&body="))
  assert.ok(link.includes("Need%20an%20API%3F%0AThanks%0A%0ASam%20%26%20Co"))
  assert.ok(waybillLink("", "Hi").includes("subject=Hello%20from%20your%20portfolio&body=Hi"))
})
