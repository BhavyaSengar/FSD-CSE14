const f1 = () => {
  console.log("f1 start");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 start");
  f3();
  console.log("f2 running");
  console.log("f2 end");
};
const f3 = () => {
  console.log("f3 start");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("Main Start");
  f1();
  console.log("Main End");
}
main();

//Java Script is syncronus and single threaded.
//In ascyncronus we use event loop to manage the call stack
//Asyncronous call using timers
//1- Set Timeout
//2- Set Immediate
//3- Process.next Tick
//4- Set Internal
