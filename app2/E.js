// Arrays, Functions and Objects
// expressions - another way define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func,libraries,

// function definition/declaration



function addValues(num1, num2) {
  //code........
  return num1 + num2;
  
}

 console.log(addValues(1, 1));

 const firstValue = addValues(3, 4);

//  console.log(firstValue);

 const secondValue = addValues(12, 34);

  console.log(secondValue);

 console.log(addValues(10, 10))



// function expression
const add = function (num1, num2) {
  return num1 + num2;
};//anonymous function, we can keep the function name or leave it.
 const thirdValue = add(5, 6);
console.log(thirdValue);

// console.log(add(100, 100));

function demo()//function scope
{
var values = [firstValue, secondValue, add(5, 6)];
}

{
  var values = [10 ,20];//block scope
}

var values = [10 ,20];//file scope

 const multiply = () => 20 * 20;

 console.log(multiply());