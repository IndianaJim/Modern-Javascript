// person constructor
function Person(name, dob) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);

  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const jim = new Person('Jim', 53);
// const jack = new Person('Jack', 55);
const jane = new Person('Jane', '12/18/1964');

//console.log(jane);
console.log(jane.calculateAge());
