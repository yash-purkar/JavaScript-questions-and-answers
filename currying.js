// Normal function
// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 4));

// Problem stmt.
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

/* without currying
let a1 = add(5);
console.log(a1);

let a2 = a1(5);
console.log(a2);

let a3 = a2(5);
console.log(a3);
*/

// We did this but it's not a right way.


// With Currying.
let res = add(5)(5)(5);
// console.log(res);





// INFINITE CURRYING

function addition(a) { //7
  return function (b) {
    if (b) {
      return addition(a + b); //2+5=7|7+6=13|13+2=15|15+1=16
    }
    else {
      return a; //16
    }
  }
}

// console.log(addition(2)(5)(6)(2)(1)()) //16


// Function Currying is a process in functional programming in which we transform function with multiple arguments into a series of nested functions that takes one argument and eventually resolve to a value.


// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a, b, c);
//       return a + b + c;
//     }
//   }
// }

// console.log(sum(5)(4)(1));

// function evaluate(a) {
//   return function (b) {
//     return function (c) {
//       if (a == "sum") {
//         return b + c;
//       }
//       else if (a == "sub") {
//         return b - c;
//       }
//     }
//   }
// }

// console.log(evaluate("sub")(5)(10))


function sum(a) { //50 //60 //65
  return function (b) { //10
    if (b) { //true //true
      return sum(a + b); //60 //60+5 =65
    }
    else {
      return a;
    }
  }
}

let total = sum(50)(10)(5)();
// console.log(total);