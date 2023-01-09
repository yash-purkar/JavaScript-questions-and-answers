// Prototypes
// Everything in JS is an object.

// In javaScript every object has built -in property, which is called prototype.A prototype is an object itself.so every prototype will have its own prototype.

// All the objects inherit the properties or methods from prototype.

//   example

const obj1 = {
  name: "Kunal",
  rollNo: 1,
  getName: function () {
    return this.name;
  },
  getAge: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birth;
  }
}

const obj2 = {
  rollNo: 2,
  birth: 2003,
  __proto__: obj1
}

console.log(obj2.name);
console.log(obj2.rollNo);
console.log(obj2.getAge());

// In above e.g we can see, we logged 'obj2.name' and it printed Kunal that is in obj1.

// 1st it found 'name' in 'obj2' and didn't get and then it went inside the 'obj1' prototype.

// If we can try to access property which is not in any prototype then it prints undefined.

// And we also logged 'obj2.rollNo' and printed '2' that is in 'obj2' but the 'obj1' also has the 'rollNo', it printed '2' that is in 'obj2' because It prints nearest.

// We can use all methods of prototypes, just like we use here getAge() method of 'obj1'.

// Here we use __proto__ and it creates the new prototype of given object and we can use methods of that object.


// Here we can see '2' prototypes in 'obj2'.

//   The 1st prototype is of 'obj1'.We can see all methods of 'obj1'.

//     The 2nd prototype is for 'obj2' becasue every object has it's own prototype.

// Prototypes of an Arrays.
// Array also has it's prototype. And it's derives from the object prototype.

//   example

// const arr = ["Yash"];
// console.log(arr);
// output


// We can see here array has it's own prototype.

// And inside the array prototype we can see methods of an array.like map(), filter() etc.

// And we can use that methods easily.

// We can also add a method / property in prototype.

// Array.prototype.show = function () {
//   return this;
// }
// Here we added a method in prototype, that does nothing but returns the given array.



// Now we can see show() method in an array prototype.

// We can use this method like we use another methods of an array.





// const names = ["Yash", "Arjun"];
// console.log(names.show());


// It printed an names array, becasue in show() method we are only returning an array, not did any operation.