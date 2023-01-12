// // Debouncing - It limits the execution of a function call and wait for certain amount of time before running it again.

// In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.


// function myDebounce(fn, d) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn();
//     }, d)

//   }
// }

// let counter = 1;
// const myFun = myDebounce(function() {
//   console.log("Working!! ", counter++)
// }, 2000);



// Throttling

// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
const btn = document.querySelector("button");
function myThrottle(fn, d) {
  return function (...args) {
    btn.disabled = true;
    setTimeout(() => {
      fn();
    }, d)
  }
}

let counter = 1;
const newFun = myThrottle(function () {
  btn.disabled = false;
  console.log("Throttling ", counter++);
}, 2000)