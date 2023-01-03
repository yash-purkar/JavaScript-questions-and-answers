// 1️⃣. Callbacks 
// // Callback function means ,
// We can pass a function to the second function as a argument,
// so that argument is known as callback function. 
//  The function which receives the callback decides when to execute the callback.

// normal function
function greetUser(name, callback) {
  console.log("Hii", name);
  callback();
}

// callback function
function callMeBack() {
  console.log("I'm callback");
}

// passing function as an argument.
greetUser("Adarsh", callMeBack);
