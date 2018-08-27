//function declarations

function greet(firstName = 'Joe', lastName = 'Doe') {
  //console.log('hello');

  return 'Hello ' + firstName + ' ' + lastName;
}
//console.log(greet());

//function expressions

const square = function(x) {
  return x * x;
};

console.log(square(8));

//immediately invokable function expressions - IIFE's

(function() {
  console.log('IIFE ran');
})();

(function(name) {
  console.log('Hello ' + name);
})('Brad');

// PROPERTY methods

const todo = {
  add: function() {
    console.log('add todo...');
  },
  edit: function(id) {
    console.log(`edit todo ${id}`);
  }
};
todo.delete = function() {
  console.log('delete todo');
};

todo.edit(22);
todo.add();
todo.delete();
