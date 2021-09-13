// Truthy and Falsy
// "",'',``,0 ,-0 ,NaN ,false, null, undefined
const bool1 = true;
const bool2 = 2 > 1;

const text = "vijay";

//string with at least one character returns true
//string with no value(empty string) return false
// "",'',``,0 ,-0 ,NaN ,false, null, undefined(all these are Falsy values)
if(text)//eventhough the value is not boolean in the condition it can evaluate
{
    console.log("hey the value Truthy");//this one bcz
}
else
{
    console.log("hey the value Falsy");
} 