// traversing the DOM
// parents and children of nodes

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//get child nodes
// val = list.childNodes; // gives everything, lines etc., not just elements
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
//types
// 1 = element
// 2 = attribute (deprecated)
// 3 = text node
// 8 = comment
// 9 = document itself
// 10 = doctype

//get children element nodes
val = list.children; // gives just elements
val = list.children[1];
val = list.children[1].textContent = 'Hello1';

//children of children
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild; //avoids text nodes

val = list.lastChild;
val = list.lastElementChild; //avoids text nodes

//count child items
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

console.log(val);
