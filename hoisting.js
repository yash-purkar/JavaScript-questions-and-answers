// Hoisting means, we can access the variables and functions even before initializing it, without any error.

console.log(getMsg);
getMsg();

function getMsg() {
  console.log("Hello");

}

console.log(num);
var num = 7;
console.log(num);


// In case of function :

// At line 1 we consoled the getMsg function and it printed the whole code of the function.

// At line 2 we called the getMsg() function and it printed the Hello.

// And in case of variable:

// At line no 6 we consoled the num variable and it printed undefined.

// At line no 7 we assigned value to the num variable.

// At line no 8 we again consoled the num and this time it printed the value of num variable i.e 7.

// Why it behaves like this ?
//   Because, Even before executing single line of code the memory is allocated to every variable and function.

// In case of variables JS engine stores the special keyword 'undefined' to it, until we put some value or assign value to that particular variable.

// In case of functions JS engine stores the whole code of the function.

// Hoisting with an Arrow function.


console.log(getMsg);
getMsg();

var getMsg = () => {
  console.log("Hello");
}

// At line no1 we consoled the getMsg and it printed undefined.
// At line no2 we called the getMsg() function and it threw an error. getMsg is not a function.
// The reason for that is, In case of the arrow function , it behaves like another variable.
// Only in case of normal function it stores the whole code of the function.

// But we can access it after assigning value to it.

var getMsg = () => {
  console.log("Hello");
}

console.log(getMsg);
getMsg();

