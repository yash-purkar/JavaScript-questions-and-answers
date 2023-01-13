// function numbers(a, b, ...c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// numbers(2, 5, 6, 9, 8)


//
// function sum(a, b) {
//   return a + b;
// }

// let numbers = [10, 20];
// console.log(sum(...numbers))


// function add(a) {
//   let b = 10;
//   return function (c) {
//     return a + b + c;
//   }
// }

// let total = add(20);
// console.log(total(30))

// async function myFun() {
//   console.log(1);
//   await console.log(4);
//   console.log(6);
// }

// myFun();
// console.log(2);
// console.log(3);


// function greetUser(cb) {
//   cb();
// }

// function callB() {
//   console.log("Hello")
// }

// greetUser(callB)

// let user1 = {
//   name: "ABc"
// }

// function registerUser(course) {
//   console.log(this.name)
//   console.log(course)
// }


// registerUser.call(user1, "js")
// let user1 = {
//   name: "ABc"
// }

// function registerUser(course) {
//   console.log(this.name)
//   console.log(course)
// }

// registerUser.apply(user1, ["js"]);




// let user1 = {
//   name: "ABc"
// }

// function registerUser(course) {
//   console.log(this.name)
//   console.log(course)
// }

// let bindedUser = registerUser.bind(user1);

// bindedUser("react")
// bindedUser("js")


// let promise = new Promise(function (resolve, reject) {
//   let num1 = 20;
//   let num2 = 20;

//   if (num1 === num2) {
//     resolve()
//   }
//   else {
//     reject()
//   }
// })

// promise.then(() => console.log("Success"))
//   .catch(() => console.log("Error Occured"))



// forEach

const myArr = [1, 2, 20, 8, 3, 40, 5, 6];

// myArr.forEach((currElem) => {
//   console.log(currElem);
// })


// map

/*myArr.map((currElem) => {
  console.log(currElem);
})*/

// filter

// let newNumbers = myArr.filter((currElem) => {
//   if (currElem > 3) {
//     return true;
//     // console.log(currElem);
//   }
//   return false;
// })
// console.log(newNumbers);

// let name = console.log("abc")
// name

// reduce 

// let total = myArr.reduce((total, numbers) => {
//   return total += numbers;
// },0)

// console.log(total);


// sort

// console.log(myArr.sort((a, b) => {
//   return b - a;
// }))

// undefined
// console.log(a);
// var a = 10;
// console.log(a);

// not defined
// console.log(x)

// null


// prototype

let obj1 = {
  getAge: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}


let obj2 = {
  birthYear: 1997,
  __proto__: obj1
}

// console.log(obj2.getAge());

// let date = new Date().toDateString();
// console.log(date)



let numbers = [1, 2, 3, 4, 5];

Array.prototype.sum = function () {
  return this.reduce((total, numbers) => {
    return total = total * numbers
  }, 1)
}

console.log(numbers.sum());