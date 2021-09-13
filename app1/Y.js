// Implicit Type Conversion(type casting)

// const myname = 'john';
// const lastName = 'jordan';
// const fullName = myname + ' ' + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = number - lastName;
// console.log(value);

// let number3 = 10;
// let number4 = 23;
// // 100 lines
// number4 = '23';
// const result2 = number3 + number4;
// console.log(result2);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type " + typeof value);
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
