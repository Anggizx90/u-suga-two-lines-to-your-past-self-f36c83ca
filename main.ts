import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines to Your Past Self — u-suga-two-lines-to-your-past-self-f36c83ca
// Writes exactly two lines to /output/entry.txt:
//   Line 1: a warning about one specific moment (the thin RISD envelope,
//   opened over the kitchen sink in April, never read past the first line).
//   Line 2: why it mattered — the scholarship inside expired, and a decade
//   was spent blaming a school that had already said yes.
// Plain TypeScript with no type annotations, so it runs as-is on Node 22.

const lines = [
  "Don't throw away the thin envelope from RISD you open over the kitchen sink in April before you read past the first line.",
  "You told everyone you were rejected, but the scholarship expired while you pretended not to care, and you spent a decade blaming a school that said yes.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
