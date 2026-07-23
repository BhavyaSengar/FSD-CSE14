import { EventEmitter } from "node:events";

const sayHi = (name) => {
  console.log(`${name} logged in`);
};

const task = new EventEmitter();
task.once("greet", () => {
  console.log("System Started");
});
task.on("greet", sayHi);
task.on("greet", (name) => {
  console.log(`${name} starts working`);
});

task.on("greet", (name) => {
  console.log(`${name} stopped working`);
});
task.once("exit", (name) => {
  console.log(`System Shutdown by ${name}`);
});

task.emit("greet", "Rahul Singh");
console.log();
task.off("greet", sayHi); //must have function name
task.emit("greet", "Manish Singh");
console.log();
task.emit("greet", "Manoj Gupta");
console.log();
task.emit("exit", "Manager"); //execute only once
task.emit("exit", "EmployExit"); //won't affect
console.log("Total Listener", task.listenerCount("greet"));
task.removeAllListeners();
