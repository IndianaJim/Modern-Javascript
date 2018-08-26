const name = 'Jim';
const age = 30;
const job = 'Web Developer';
const city = 'Indianapolis';
let html;

function hello() {
  return 'Hello';
}

//without template strings (es5)
html =
  '<ul><li>Name: ' +
  name +
  ' </li><li>Age: ' +
  age +
  ' </li><li>Job: ' +
  job +
  ' </li><li>City: ' +
  city +
  ' </li><ul>';

//using template strings or literals

html = `
  <ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 32 ? 'Over 32' : 'not over 32'}</li>
  </ul>
  `;

document.body.innerHTML = html;
