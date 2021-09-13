// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friend1 = "anna";
const friend2 = "anna";
const friend3 = "anna";
const friend4 = "anna";

//heterogeneous datatypes
const friends = ["john", "peter", "bob", "susy", 45, undefined, null];

const myfriends = ["john", "peter", "bob", "susy", "abc", "xyz", "aaa"];



//console.log(typeof null);

let bestFriend = friends[2];

friends[4] = "anna";//reinitialize the content

console.log(friends);

console.log(friends[4]);

console.log(bestFriend);

console.log(friends[3]);

console.log(friends[7]); //not an error but undefined

console.log(friends.length);

console.log(myfriends[myfriends.length - 1]);
