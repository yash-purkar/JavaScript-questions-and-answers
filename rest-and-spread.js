// 1️⃣. Rest parameter 

// Rest parameter help us to pass infinite number of function arguments, And it combine that arguments and return an array of that arguments.

// E.g

function printNums(a, b, ...other) {

  console.log(a, b);
  console.log(other);
}
printNums(1, 2, 20, 30, 40);

// In the above example parameter a & b refers to the 1 & 2, and the other parameter refers to the everything after 1 & 2, and it combine that arguments and returns the array.

// So basically we use rest parameter to extract all the remaining vlaues and put them in an array.



// 2️⃣. Spread operator

// The spread operator basically spreads the value of an iterable object. 
// It also allows us to expand arrays and other expressions in place where multiple parameters and elements are expected.

// E.g

function add(a, b) {
  return a + b;
}

let numbers = [10, 20];
let sum = add(...numbers);

// In above example, we are using spread operator. when we call add() function we are spreading the numbers array.
// So the value of parameter a will be 10 and the value of parameter b will be 20.