const students = [
  { name: "Yash", age: 21 },
  { name: "Arjun", age: 25 },
  { name: "Atharva", age: 19 },
  { name: "Sarthak", age: 16 },
  { name: "Rutik", age: 18 }
];

const numbers = [7, 5, 9, 3, 6, 8, 2, 4, 1];

// 1️⃣. forEach()
// 1. This method is used to execute same code on the every element in an array but doesn't change the original array, and it returns undefined.

// 2. forEach() method calls the function and iterates over the elements of the array.

students.forEach(function (currElem) {
  console.log(currElem.name)
})



// 2️⃣. filter()
// 1. filter returns the elements of an array that satisfy condition specifies in the callback function.

// 2. filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

let newAges = students.filter(function (currElem) {
  if (currElem.age > 20) {
    return true;
  }
  return false;
});

console.log(newAges);



// 3️⃣. map()
// 1. map() executes the same code on every element in an array and return the new array with the updated elements.

// 2. map() calls the function for every array element, and returns the new array, doesn't change the original array.

students.map(function (currElem) {
  console.log(currElem.name);
});


// 🛑 The difference between forEach() and map().
// map() returns the new arary.
// forEach() does not return the new array.


// 4️⃣. sort()
// sort() method is used to sort the elements of an array in ascending or descending order.

let ascending = numbers.sort(function (a, b) {
  return a - b;
})

let descending = numbers.sort(function (a, b) {
  return b - a;
});


// 5️⃣. reduce()
// reduce() method executes the reducer function on every element on the array and returns a single output value.

// sum of the numbers array.
let sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(sum);

// reduce function takes the callback function.
// And the callback function takes in
/* 1. accumulator(in our e.g total);
Accumulator accumulates the callback's return values.
In simple words, it stores the values that callback function return everytime.
*/
