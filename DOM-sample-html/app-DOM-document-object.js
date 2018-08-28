let val;

val = document;
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.forms;
val = document.forms[0].id;
val = document.links[0];

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
