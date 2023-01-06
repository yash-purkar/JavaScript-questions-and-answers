// In javaScript every object has built-in property, which is called prototype.Prototype is an object itself. so every prototype will have its own prototype.

// All the objects inherit the properties or methods from prototype.


// e.g
const obj1 = {
  alpha: "A",
  getAlpha: function () {
    console.log(this.alpha);
  },
  getNum: function () {
    console.log(this.num);
  }
}

const obj2 = {
  num: 1,
  __proto__: obj1
}

console.log(obj2.getAlpha());
console.log(obj2.getNum());

// output will be 'A' and '1'

// suppose in obj2 we have 'alpha' too, then it will print the alpha of obj2.
// It prints nearest.



// Creating a prototype of array

Array.prototype.sum = function () {
  let total = 0;
  this.forEach(currElem => total += currElem);
  return total;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.sum());

// We have created method in array prototype like map(), filter(),
// we created sum(), which returns the sum of elements of the array.
