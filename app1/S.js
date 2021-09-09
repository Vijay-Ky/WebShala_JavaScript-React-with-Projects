// LET VS CONST VS VAR

// using var
var value = "some value";
value = "some other value";
console.log(value);

//javascript is dynamicaly typed language
myname = "20";
console.log(typeof myname);

// using let
let myNameIs = "john";
myNameIs = "vijay";
console.log(myNameIs);



// using const (CONSTANT) - can't re-assign
const lastName = "smith";
//lastName = "kumar";

//const someVariable;


//var and let got replaced by const in ECMA 2015


//const somevariable; //will be error because no value, just declared not initialized.


//difference b/w let and var
//var
// function abc()
// {
//     var xyz = "some value";
//     console.log(xyz);
// }
// abc();
// var xyz = "some other value";
// console.log(xyz);
