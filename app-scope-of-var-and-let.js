//scope of var and let
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('function Scope: ', a, b, c);
// }
// test();

// if(true){
// //block scope
// var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If block Scope: ', a, b, c);
// }

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
