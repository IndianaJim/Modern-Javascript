//if and if-else
const id = 100;

//equal to
// if (id == 101) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }
// //not equal to
// if (id != 101) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }
// //equal to value and type
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }
// //not equal to value and type
// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }

//test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`the ID is ${id}`);
// } else {
//   console.log('no id');
// }

//greater or less than
// if (id >= 100) {
//   console.log('Correct');
// } else {
//   console.log('incorrect');
// }

// const color = 'yellow';
// if (color === 'red') {
//   console.log('color is red');
// } else if (color === 'blue') {
//   console.log('color is blue');
// } else {
//   console.log('color is not red or blue');
// }

//logical operators
const name = 'Steve';
const age = 20;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');

//without braces
if (id === 100) console.log('correct');
else console.log('incorrect');
