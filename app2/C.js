// params - when declare/define
// placeholders, local vars

const bob = "Bob";
const susy = "Susy";
const anna = "Anna";

//1st and redundant approach
function helloAnna() {
  console.log(anna);
}
function helloBob() {
  console.log(bob);
}
function helloSusy() {
  console.log(susy);
}

helloAnna();
helloBob();
helloSusy();

//2nd and best approach
function greet(myname, second) {
  console.log(second);

  console.log("Hello there " + myname);
}
//console.log(myname); //error since using outside the function greet

// greet bob
greet(4);
// greet anna
greet(anna, "Bob");
// greet susy
greet("Susy");
