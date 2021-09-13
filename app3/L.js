// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';

function calculate() {
    //cant use outside
  const name = 'john';
    //cant use outside
  const age = 25;
  // code goes here
  //if you dont use keyword to protect your variable then js makes it global so that you can access outside as well
  becomesGlobal = 'global variable';
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = 'john';
}

{
  const name = 'john';
  const special = 'special';
}
console.log(special);

console.log(`my name is ${name} and I'm awesome`);
