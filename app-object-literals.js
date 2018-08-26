//object literals
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@email.com',
  hobbies: ['music', 'movies'],
  address: {
    city: 'Indianapolis',
    state: 'IN'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};
let val;
val = person;

//get specific value
val = person.firstName;
//or
val = person['firstName'];
val = person.lastName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Jim', age: 30 },
  { name: 'John', age: 22 },
  { name: 'Jake', age: 40 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
