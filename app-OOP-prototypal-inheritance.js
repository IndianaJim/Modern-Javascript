//prototypal inheritance

//person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Jim', 'Jones');

console.log(person1.greeting());

//customer
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//inherit person protoype methods
Customer.prototype = Object.create(Person.prototype);

//make customer prototype return a customer
Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Std');

console.log(customer1);

//customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${
    this.lastName
  } welcome to our company.`;
};

console.log(customer1.greeting());
