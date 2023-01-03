// 1️⃣. Async
/* Async function means asynchronous function.
We use the async keyword with the function to represent that the function is an asynchronous function.
The async function return the promise.
*/

// Syntax

async function functionName() {
  //statements
}

// 2️⃣. Await
/*
The await keyword is used inside the async function to wait for the asynchronous operation.
The await pauses the async function until the promise returns a result.
*/


// E.g 1
async function printNums() {
  console.log(1);
  await console.log(2);
  console.log(3)
}
printNums();
console.log(4);
console.log(5);

/*
The output will be 
1
2
4
5
3

Because first we called the function printNums so it printed 1 and 2 and function was waiting after printing 2 until whole programme's execution.
So once all programme execution  is done then it checks is programme execution done? if yes then it printed 3.
*/





// E.g 2
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = response.json();
  console.log(data);
}
fetchData();

/* In above e.g we are fetching the data,
until we get the data from api the fetchData function will wait, and once we get the response the it will store that response in data variable in json format. and we printed that.
*/


// We can also handle error using try and catch block.

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = response.json();
    console.log(data);
  }
  catch (err) {
    console.log("Error occured");
  }
}
fetchData();

// If something went wrong with server it will go inside the catch() and print Error occured.