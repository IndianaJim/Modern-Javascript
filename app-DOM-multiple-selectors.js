// DOM selectors for multiple elements

// //document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// // console.log(lis[0]);

// //convert html collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = 'Hello ' + index;
// });
// console.log(lis);

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
  item.textContent = 'Hello ' + index;
});
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
//by foreach
liOdd.forEach(function(li, index) {
  li.style.background = '#ccc';
});
//by for loop
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
