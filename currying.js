// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.


function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}
let a1 = currying(5);
// console.log(a1);

let a2 = a1(7);
// console.log(a2);

let a3 = a2(3);
// console.log(a3);



// We can see in console the currying function is returning a function and that function also returning the another function and inside this we are returning sum of the numbers.

// So We can see if we pass an argument to currying() it is returning another function we stored that function inside a1, // So that another function is taking an argument, and returning another function so we stored that function in a2, and that another function expects the one argument and returns the sum of the numbers, and we stored that sum inside a3.



// BUT THIS IS NOT RIGHT WAY TO DO THAT.

// We can do by simple way using currying;

let total = currying(5)(7)(3);
console.log(total);

// Now the 5 will assign to the a, now the currying function returning the another function and that function is taking an argument so the 7 will assign to b, now this function is also returning the another function and taking ane one argument so 3 will assign to c.
// Then c will return the sum of the numbers that will be 15/






// INFINITE CURRYING
// e.g
// If we pass infinite number of nested function argument

function currying(a) { //2|7|13|15|16
  return function (b) {
    if (b) {
      return currying(a + b); //2+5=7|7+6=13|13+2=15|15+1=16
    }
    else {
      return a; //16
    }
  }
}

// console.log(currying(2)(5)(6)(2)(1)()) //16



// 1st We pass 2 that will assign to a then the currying is returning the function and that function is taking an one argument so we pass the 5. Now that function will check, Is any value inside b? 
// In case of yes it will call the currying function again and that function is taking an argument so we pass the argument a+b that will be 2+5=7 so now a will be 7 and the currying is returning the function and that function expects the one argument and we pass the 6 this time and it will check Is any value inside b? and so on.

// And once it'll see the () empty, that means no value in b then it will return the value of a.


// Function Currying is a process in functional programming in which we transform function with multiple arguments into a series of nested functions that takes one argument and eventually resolve to a value.




function evaluate(a) {
  return function (b) {
    return function (c) {
      if (a == "sum") {
        return b + c;
      }
      else if (a == "sub") {
        return b - c;
      }
    }
  }
}
console.log(evaluate("sum")(100)(50));
console.log(evaluate("sub")(100)(50));


// We are passing an operation name to the evaluate() function and this function is returning an another function which expects the one argument , and that function is also returning the another function which also expects the one argument and then it returns the result on conditions.

