import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Future you here. Stop saving the good towels for guests. The guests never came \u2014 and the towels are curtains now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
