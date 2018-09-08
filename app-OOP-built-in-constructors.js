//Built in constructors - generally not better than using primitives

//string

const name1 = 'Jim'; //string type
const name2 = new String('Jim'); //makes an object type

//name2.foo = 'bar';
//console.log(name1 + ' ' + name2);
//console.log(name2);

// console.log(typeof name2);

// if (name2 == 'Jim') {
//   console.log('yes');
// } else {
//   console.log('no');
// }

//number

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

//boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);

//funtion
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum2(1, 1));

//object
const john1 = { name: 'John1' };
const john2 = new Object({ name: 'John2' });
console.log(john2);

//arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(5, 6, 7, 8);

console.log(arr1);
console.log(arr2);

//regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);
