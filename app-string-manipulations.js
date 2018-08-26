const firstName = 'Jim';
const lastName = 'Johnson';
const age = 22;
const str = 'Hello there my name is Jim';
const tags = 'web design, web development, other stuff';

let val;

val = firstName + lastName;
//concatenation
val = firstName + ' ' + lastName;
//appending
val = 'jim ';
val += 'johnson';

val = 'hello my name is ' + firstName + ' and I am ' + age;

//escaping
val = "That's awesome, I can't wait";

//length
val = firstName.length;
//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();

val = firstName[0];
//indexof
val = firstName.indexOf('m');
val = firstName.lastIndexOf('m');
//char at()
val = firstName.charAt(2);
//get last character
val = firstName.charAt(firstName.length - 1);
//substring
val = firstName.substring(0, 2);
//slice
val = firstName.slice(0, 2); //same
//split
val = str.split(' ');
val = tags.split(',');
//replace
val = str.replace('Jim', 'Jack');
//includes
val = str.includes('Jim');

console.log(val);
