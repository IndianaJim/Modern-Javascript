//event listeners and the event object

// const clearTasks = document
//   .querySelector('.clear-tasks')
//   .addEventListener('click', function(e) {
//     console.log('Hello World');

//     //e.preventDefault();
//   });

const clearTasks = document
  .querySelector('.clear-tasks')
  .addEventListener('click', onClick);

function onClick(e) {
  //console.log('Clicked');

  let val;
  val = e;

  //event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  //event type
  val = e.type;

  //time stamp
  val = e.timeStamp;

  //coords relative to window
  val = e.clientY;
  val = e.clientX;

  //coords relative to element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
