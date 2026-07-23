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
