//var, let, const

//var
// var name = "Jim Doe";
// console.log(name);
// name = "Bob";
// console.log(name);

// //init variable
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);
// //variables can only have letters, numbers, _, $, and cannot start with number

//let
// let name = "Jim Doe";
// console.log(name);
// name = "Bob";
// console.log(name);

//const = can not be reassigned
// const name = "Jim Doe";
// console.log(name);
// // name = "Bob";
// console.log(name);

//but const object properties can be changed.
const person = {
  name: "Jim",
  age: 32
};

person.name = "Sara";
person.age = 32;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
