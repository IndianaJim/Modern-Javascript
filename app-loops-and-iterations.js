// loops and iterations

//for loop
for (let i = 0; i < 5; i++) {
  //console.log(i);
}

//for loop
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    //console.log('2 is my favorite number');
    continue;
  }

  if (i === 3) {
    break;
  }
  //console.log(i);
}

//while loop

// let i = 0;
// while (i < 10) {
//   //console.log('number ' + i);
//   i++;
// }

// let i = 0;
// do {
//   console.log('number ' + i);
//   i++;
// } while (i < 10);

//looping thru array

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

//for each
// cars.forEach(function(car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

//MAP
// const users = [
//   { id: 1, name: 'Jim' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Kelly' },
//   { id: 4, name: 'Kellie' }
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);
//for in
const user = {
  fn: 'Jim',
  ln: 'Doe',
  age: 20
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
