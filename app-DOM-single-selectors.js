// DOM selectors
//document.getElementById()

// console.log(document.getElementById('task-title'));

// //get things from the element
// console.log(document.getElementById('task-title').id);
// //console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');
// //change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// taskTitle.style.padding = '5px';
// //document.getElementById('task-title').style.display = 'none';

// // change content
// document.getElementById('task-title').textContent = 'task test';
// taskTitle.innerText = 'My Tasks';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); //just gets first one

//list items
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
