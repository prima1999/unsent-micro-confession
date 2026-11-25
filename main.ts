// Unsent: The Micro-Confession Sprint — entry 1.
// One two-part micro-confession, written exactly as typed:
// a To: line naming who it was meant for, then the unsent line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TO_LINE = "To: the nurse on the night shift, March";
const MESSAGE = "you held my hand while my mother died and i never learned your name to thank you";

const TEXT = `${TO_LINE}\n${MESSAGE}`;

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
