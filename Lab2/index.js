import { writeFile } from "fs/promises";

await writeFile("Student.text", "Ravikant Singh\nRoll No. 82");
console.log("File Written");
