// replace elements

// create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));

//get the old heading
const oldHeading = document.getElementById('task-title');
//get parent
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading, oldHeading);

//console.log(newHeading);

//remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
//lis[0].remove();

//remove
//list.removeChild(lis[3]);

//class and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
