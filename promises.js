// 1️⃣. Promises
/*A promise is an object that may produce single value in future.
Either resolved or not resolved. The reason for not resolved : it may be issue of the server or
internet issue like that.
A promise may be in one of 3 possible states: Fullfiled, rejected or pending.
fulfilled: means that the operation was completed successfully.
 rejected: means that the
operation failed.
And pending : It is the default state of promise , the promise in in the pending state until promise
get’s resolve or rejected.*/


let promise = new Promise(function (resolve, reject) {
  let num1 = 20;
  let num2 = 20;

  if (num1 === num2) {
    resolve();
  }
  else {
    reject();
  }
})

promise.then(function () {
  console.log("Success");
})
  .catch(function (err) {
    console.log("Error occured");
  })

  // In the above example, if the num1 and num2 are same it will call the resovle() function and when is called the then() function is executed.

  // And if it false it will call reject() function and when reject is called it throws an error and we can handle that error using catch();