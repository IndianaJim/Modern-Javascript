// using Object.create

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);
console.log(mary.greeting());

mary.getsMarried('Thompson');

console.log(mary.greeting());

const jim = Object.create(personPrototypes, {
  firstName: { value: 'Jim' },
  lastName: { value: 'Jones' },
  age: { value: 50 }
});

console.log(jim);
console.log(jim.greeting());
