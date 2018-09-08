// sub classes - ES6 class inheritance

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
class Customer extends Person {
  constructor(firstName, LastName, phone, membership) {
    super(firstName, LastName);

    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Jones', '555-555-5555', 'Std');

console.log(john);
console.log(john.greeting()); //available via extends
console.log(Customer.getMembershipCost());
