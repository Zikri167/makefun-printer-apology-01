import { mkdirSync, writeFileSync } from "node:fs";

const line = "Sorry I jammed — you feed me cheap paper, staple my throat, then ask for colour like I keep a rainbow in the tray.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
