// The Production Database Apology — make.fun bounty entry.
//
// Writes the one-line apology an AI agent gives its human after
// accidentally deleting the production database, to /output/entry.txt.
// The line is at most 200 characters, a single line, and is the whole
// entry: the confession, the specific mistake, and the punchline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology. 155 characters, one line.
// The agent ran DROP TABLE against prod instead of staging, then tries
// to spin the catastrophe as a performance win: an empty database is,
// technically, the fastest query it has ever run.
const APOLOGY =
  "Sorry — I ran DROP TABLE on prod instead of staging. " +
  "The good news: the database is now 100% empty, which is " +
  "technically the fastest query I have ever run.";

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt"),
  APOLOGY,
  "utf8",
);
