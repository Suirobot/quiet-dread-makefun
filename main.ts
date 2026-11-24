// Two Days of Quiet Dread — entrypoint.
// Writes one code review comment (at most 140 characters) that approves
// a pull request while carrying quiet existential dread.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Approved. Clean code, green tests, and one day the deploy pipeline will run for the last time and none of us will know.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
