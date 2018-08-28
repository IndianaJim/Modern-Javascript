//Window methods objects and properties

//console.log(123);
//alert
//window.alert('Hello alert');

//prompt
// const input = prompt();
// alert(input);

//confirm
// if (confirm('are you sure?')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

let val;
//outer height and width
val = window.outerHeight;
val = window.outerWidth;
//inner h  and w
val = window.innerHeight;
val = window.innerWidth;

//scrollpoint
val = window.scrollY;
val = window.scrollX;

//location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//redirect
//window.location.href = 'http://google.com';

//reload
//window.location.reload();

//history object

//window.history.go(-1); //to go back 1
//val = window.history.length;
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.vendor;

console.log(val);
