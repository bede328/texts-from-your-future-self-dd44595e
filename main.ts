import { mkdirSync, writeFileSync } from "node:fs";

// One funny text from the future self (113 characters, no trailing newline).
const LINE =
  "Future you here. Stop saving the good towels for guests. The guests never came \u2014 and the towels are curtains now.";

// The gate needs 1-200 non-whitespace UTF-8 characters: fail loudly
// instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
