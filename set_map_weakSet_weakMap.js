// 1. Set - Set is a javaScript object holds only unique values in it.

// e.g
let myArr = [1, 2, 3, 4, 5, 6];
let obj = new Set(myArr);
console.log(obj);

// img set1
// If we see the prototype of Set() we can see some properties or methods that we can use.

obj.add(7);
obj.add(7);
console.log(obj);

// Output 
// img set2

// Here we added 7 two times and in console we can see 7 only one time, because Set contains the only unique values.


// In set we can store object as well individual elements
// for e.g
// Number, string , array and object also.

let myObject = {
  name: "Yash"
}

obj.add(myObject);
console.log(obj)

// We can check is the element inside Set using
// has()

// We can clear the Set using
// clear()

// We can also iterates the Set.

obj.forEach((elem) => {
  console.log(elem);
});

// img set4




// Map
// Map is a JS object holds key & value pairs.

let myMap = new Map([["a1", "Yash"], ["a2", "Arjun"]]);
console.log(myMap);

// img map1

// We can see a1 and a2 are the properties and the Yash and Arjun are the values.

// We can also see the properties of Map() in prototype of Map();

// We can use that easily.

// set
myMap.set("a3", "Adarsh");
myMap.set("a2", "Rohan");
console.log(myMap);

// img map2

// 1st we added the a3 key and the value is Adarsh, it addes successfully.
// Then we set the value of a2 again with "Rohan", so the Rohan is overriding the Arjun, and Rohan is displayed as a value of a2.


// Map() has some more properties that we can use.
// like 
// delete() - for delete.
// get() - for getting the value of particular key.


// And we Can also iterate the Map();

myMap.forEach((value, key) => {
  console.log(`Key : ${key} Value : ${value}`);
})

// img map3




// WeakSet

// We can store only objects.
// We can't iterate it.

// e.g
let ws = new WeakSet();
console.log(ws);

let obj1 = {
  name: "Adarsh"
}
ws.add(obj1);

// If we try to add different than object, It'll throw an error.
// Here we can see some properties of WeakSet() in WeakSet Prototype.
// And We can use That easily.

console.log(ws.has(obj1));
// The output will be true bcz obj 1 is in the WeakSet.




// WeakMap()
// It is the collection of key value pairs, the key must be an object.
// We can't iterate it.

let wm = new WeakMap();
console.log(wm);

let object1 = {
  name: "Yash"
}

let object2 = {}


wm.set(object1, "Private Data1");
wm.set(object2, "Private Data2");

console.log(wm);
// img weakMap1

// The object1 and object2 are keys, and Private Data1 and Private Data2 are values.
