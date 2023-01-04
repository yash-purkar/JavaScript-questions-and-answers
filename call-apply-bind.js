// 1️⃣. call()
// 1. The call() method calls the function with a given "this" value and arguments provided individually.

// 2. call is used to invoke a funciton directly by passing the reference to the "this" keyword.

let student1 = {
  name: "Kunal",
  age: 21
}

function registerStudent(course, fees) {
  let name = this.name;
  console.log("Name : ", name)
  console.log("Course : ", course)
  console.log("Fees : ", fees)
  console.log("\n")
}

registerStudent.call(student1, "ReactJS", 5000);

// Output
// Name : Kunal
// Course : ReactJS
// Fees : 5000


// 2️⃣. apply()
// Apply is exactly same as the call method, the only difference is , it takes second argument as a array list.
// Basically we send the arguments in the form of array.

registerStudent.apply(student1, ["ReactJS", 5000]);

// output will be same as previous
// Name : Kunal
// Course : ReactJS
// Fees : 5000


// 3️⃣. bind()
// 1. bind() method is similar to call() method , but it solves the problem of sending objects in a method call everytime. And it returns a new function which has "this" keyword bind with the object.

// 2. bind() method does not directly invoke the function, but gives you the copy of that function, which can be invoke later.

let registerBind = registerStudent.bind(student1);

registerBind("Python", 2000);
registerBind("Angular", 1000);

// output
// Name : Kunal
// Course : Python
// Fees : 2000

// Name : Kunal
// Course : Angular
// Fees : 1000