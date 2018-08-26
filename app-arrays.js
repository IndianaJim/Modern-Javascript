//arrays

//create some arrays

const numbers = [43, 56, 77, 33, 23, 67, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Pear', 'Peach', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;
//get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get single value from array
val = numbers[2];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(56);
//mutating arrays
//add onto end of array
numbers.push(250);
//add onto front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values
numbers.splice(1, 1);
//reverse
numbers.reverse();
//concatenate array
val = numbers.concat(numbers2);
//sorting array
val = fruit.sort();
val = numbers.sort();
//using compare for better sort
val = numbers.sort(function(x, y) {
  return x - y;
});

//find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

console.log(val);
console.log(numbers);
