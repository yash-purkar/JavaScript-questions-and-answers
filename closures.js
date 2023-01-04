// A closure gives you access to an outer function's scope from an inner function.

function sum(a) {
  let b = 20;
  return function (c) {
    return a + b + c;
  }
}

let store = sum(10);
console.log(store(20));
