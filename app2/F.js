// Arrays, Functions and Objects
// Objects - key/value pairs  methods
//objects are properties and properties also refered to as keys
//properties or keys has values.
//if the property : value is a function then its called methods.
// dot notation
//an object real world entity
const person = {
  name: 'john',
  lastName: 'peters',
  age: 25,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting() {
    console.log('Hello my name is JOHN');
  },
};

const age = person.age;
console.log(age);
person.name = 'bob';
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();


