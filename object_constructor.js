/*var student1 = {
  fName: "Akash",
  lName: "Sharma",
  age: 20
}*/

//  Now we want create for student 2 also , so we'll create another object for student 2;

/*var student2 = {
  fName: "Rushi",
  lName: "Shah",
  age: 21
}*/

// We created for student 2 also, but what if , if we want for 100 student , we have to do copy and paste , but the code will be very lengthy.

// We know the properties are same only values are changing,
// So we'll use object constructor.
// First lettr should be capital

function Student(fn, ln, age) {
  this.fName = fn;
  this.lName = ln;
  this.age = age
}

var student1 = new Student("Akash", "Sharma", 25);
// console.log(student1);

// img1

// 1st we created object constructor function.
// Then we created object from it. That is exactly similar as we created before.

// So now we can easily make the object of 100 students, by writing single line for per student.

student2 = new Student("Rushi", "Shah", 21);


// NOW IF WE WANT TO ADD A PROPERTY OR METHOD IN A PARTICULAR STUDENT

/*student1.addr = "Delhi";
student1.fullName = function () {
  return this.fName + " " + this.lName;
}
 console.log(student1);*/

// img2

// Now we have added only in student1 so it'll not show in other students.


// NOW, WE WANT TO ADD "NATIONALITY" INDIAN WITH THE ALL STUDENTS THEN WE CAN GO AND WRITE IN DIRECTLY CONSTRUCTOR FUNCTION 
// like this
// this.nationality = "Indian"

// Now nationality will be add with all of the students objects.


// IF WE WANT TO ADD METHOD OR PROPERTY LATER(after) IN CONSTRUCTOR THE WE HAVE TO ADD IN PROTOTYPE.

Student.prototype.fullName = function () {
  return this.fName + " " + this.lName;
}

// And for access this method we can easily write
console.log(student1.fullName());
console.log(student2.fullName());

// img3

