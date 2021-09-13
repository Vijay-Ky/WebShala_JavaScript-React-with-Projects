// params - when declare/define
// placeholders, local vars

// const bob = "Bob";
// const susy = "Susy";
// const anna = "Anna";

// //1st and redundant approach
// function helloAnna() {
//   console.log(anna);
// }
// function helloBob() {
//   console.log(bob);
// }
// function helloSusy() {
//   console.log(susy);
// }

// helloAnna();
// helloBob();
// helloSusy();

// console.log('----------------------------');

// //2nd and best approach
// function greet(myname)
// {
//   console.log("Hello there " + myname);
// }

// greet('vijay');
// greet('bob');
// greet('susy');
// greet('anna');


console.log('----------------------------');

function greet(myname, second)//placeholder
{
  console.log(second);

  console.log("Hello there " + myname);
  console.log(typeof myname);
}
console.log(myname); //error since using outside the function greet

// // greet bob
 //greet();
// // greet anna
 greet('lksdjflsj', "Bob");
// // greet susy
// greet("Susy");
