let val;

//number to string
val = String(5);
val = String(4 + 4);
//bool to string
val = String(true);
//date to string
val = String(new Date());
//array to string
val = String([1, 2, 3, 4, 5]);

//to string
val = (5).toString();
val = true.toString();

//string to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); //=NaN

val = parseInt("100.30");
val = parseFloat("100.31");

//output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed());

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
