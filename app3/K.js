// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let myname = 'bobo';
myname = 'peter';

function calculate() {
  // some other code...
  console.log(myname);
  myname = 'orange';
  function inner() {
    myname = 'inner name value';
    console.log(`this is from inner function ${myname}`);
  }
  inner();
}
 calculate();

if (true) {
  // some other code...
  console.log(myname);
  myname = 'pants';
}

console.log(`my name is ${myname} and I'm awesome`);
