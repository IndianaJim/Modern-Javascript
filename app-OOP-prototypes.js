//Object.prototype
//Person.prototype

// person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

//calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const jim = new Person('Jim', 'Smith', '12-01-1990');
const mary = new Person('Mary', 'Jones', '3-01-1992');

console.log(mary);

console.log(jim.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Johnson');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
