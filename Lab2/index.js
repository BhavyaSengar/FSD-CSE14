import { writeFile, readFile } from "fs/promises";

// await writeFile("Student.txt", "Ravikant Singh\nRoll No. 82");
// console.log("File Written");

const data = await readFile("student.txt", "utf-8");
console.log(`file content: ${data}`);
