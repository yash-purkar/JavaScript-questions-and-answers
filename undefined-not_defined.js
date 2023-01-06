// 1️⃣. undefined
// In javaScript 'undefined' is a keyword , that has special meaning, everything which gets space in memory contains the undefined until we assign value to that memory space.

// e.g
console.log(a);
let a = 10;
console.log(a);

// if we try to access 'a' before initialize we'll get undefined.
// and if we access it after initializing we'll get 10 here.

// 2️⃣. not defined
// It is the one type of reference error, which js engine throws when we try to access variable or function which is not inside the memory.

// e.g
// suppose we don't have 'x' in memory.
console.log(x);

// It will throw the reference error.
// Uncaught ReferenceError : x is not defined