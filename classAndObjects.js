// Internally it works exactly same as constructor function and prototype , that we saw in object constructor function.

// class replaces constructor.

// syntax of class
// class person {

// }

// Now we can create object from this class.
// let person1 = new person();
// console.log(person1);

// img1

// We can see blank object of person1, blank object because we didn't write anything in person class.


// There are Three methods of class
// 1. constructor method
// 2. prototype method
// 3. static method


// 1. constructor method
// syntax
/*constructor() {

}*/

// We write this constructor function inside class,
// We use constructor to assign values to properties.
// Whenever we'll create object of the class then the constructor will be called automatically.

/* constructor(name, age) {
   this.pName = name;
   this.pAge = age;
 }*/




// 2. prototype method

// e.g
/*sayHii() {
  console.log("Hii ", this.pName);
}*/

// We said prototype method to this method because It is added automatically in prototype.


// 3. static method
// e.g
/*static hello()  {
  console.log("Hello");
}*/

// Static function is called only by the class, if we make object and the try to access it it'll show an error.
// We can only call this by class
// e.g person.hello();

// We can also make static prperty
// static staticProperty = "Something";
// We only access this property by class.
// person.staticProperty

// In this example we have used all 3 methods.
/*
class person {
  constructor(name, age) {
    this.pName = name;
    this.pAge = age;
  }

  sayHii() {
    console.log("Hii ", this.pName);
  }

  static hello() {
    console.log("Hello");
  }
}

let person1 = new person("Akash", 21);
let person2 = new person("Kunal", 22);
// We set that values in constructor.
// This 2 arguments we are receving in constructor as a name and age.
// When ever the object is created of the class constructor calls automatically.

console.log(person1.sayHii());

*/

/* for this console it'll throw the error because we can't access static by object
// console.log(person1.hello())
*/

// In object's prototype , we can see sayHii() function , because prototype method stores in prototype automatically, But we can't see hello() method becaluse it's static method.



// INHERITANCE

// Inheritance means we can access another's class properties and methods.
// For inherit we have to use "extends" keyword

/*class emp {
  constructor(n) {
    this.name = n;
    console.log("emp called");
  }
}*/

/*class manager extends emp {

}

let mg1 = new manager("Akash");
console.log(mg1)*/
// img3

// We can see , here we created the manager class's object but in console the "emp called" printed , because we extended all properties or methods of emp class.
// We are passing name to manager and the value was set from the emp's constructor.



// NOW WE'LL CREATE THE CONSTRUCTOR() IN MANAGER ALSO

// AND THIS WE'LL SET THE DEPARTMENT OF THE MANAGER AND WE'LL SET THE NAME FROM EMP'S CONSTRUCTOR , SO WE'LL USE EMP'S CONSTRUCTOR IN MANAGER CLASS BY USING "SUPER".

/*class manager extends emp {
  constructor(n, d) {
    super(n);
    this.department = d;
  }
}

let m1 = new manager("Akash", "webDev");
console.log(m1);*/

// img4

// we are passing name to this, the name will go inside constructor of the emp and it'll assign their to name.

// WE CAN ALSO ACCESS THE METHODS OF PARENT CLASS 

// SUPPOSE IN emp class we have 1 prototype method
/*msg() {

}*/

// WE WANT TO ACCESS THIS INSIDE MANAGER SO 
// IN MANAGER CLASS

class emp {
  msg() {
    console.log("Heyy");
  }
}

class manager extends emp {
  info() {
    super.msg();
  }
}

let mg1 = new manager();
console.log(mg1.info());

// img  5

// We called info() but inside this we called msg() that is in emp class.
// So we can use methods as well.

// SO FOR PROPERTIES WE USE this.prpoertyName
// and for methods we use super();



// suppose emp class has msg() method and manager class also has msg() then how to access?

    // FOR emp method USE 
    // super.msg()
    // And for manager method use
    // this.msg() 



    // Now if create another class "admin" and with that class we extends manager so the "admin" class will have access to properties and methods of manager class and also emp class, emp class because we extended that class with manager.