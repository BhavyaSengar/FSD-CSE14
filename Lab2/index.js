import { writeFile, readFile } from "fs/promises";

// await writeFile("Student.txt", "Ravikant Singh\nRoll No. 82");
// console.log("File Written");

// const data = await readFile("student.txt", "utf-8");
// console.log(`file content: ${data}`);

const addContent = async (fname, content) => {
  await writeFile(fname, content);
  console.log(`${content} written in file: ${fname}`);
};

const readContent = async (fname) => {
  const data = await readFile(fname, "utf-8");
  return data;
};

addContent("notes.txt", "FS is easy in JS");
console.log("Contents\n",   readContent("notes.txt"));
