
// Here I have used <div> tag and inside it I've used <button> tag.

// Event Bubbling
// Event bubbling goes child to parent.

let div = document.querySelector("div");
let button = document.querySelector("button");

div.addEventListener("click", function () {
  console.log("Div");
});

button.addEventListener("click", function () {
  console.log("Button");
});


// When I click on button the "Button" and "Div" is printing in console.

// 1st "Button" is printing becasue <button> is the child element and the "Div" is printing becasuse <div> is the parent element.
// Event Bubbling goes child to parent.



// 2️⃣ Event Capturing

// This is similar to event bubbling but the difference is it goes parent to child.
// For applying this we have to give third argument to the addEventListener(). That argument will be true.


div.addEventListener("click", function () {
  console.log("Div");
}, true);

button.addEventListener("click", function () {
  console.log("Button");
}, true);

// If we click on button we can see "Div" is printing 1st because it's the parent element. And then "Button" is printing because it's child element.


// 3️⃣ Stop propagation

// When we are clicking the button the button's event is being triggered but also the parent's event is being triggered. In some cases we don't want this.
// So for stop that we use stopPropagation.

// When we click on button we get an event. And on that event we will stop the propagation.


div.addEventListener("click", function () {
  console.log("Div");
});

button.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Button1");
});

button.addEventListener("click", function (event) {
  console.log("Button2");
})

// We can see only "Button1" and "Button2" is printing, "Div" is not printing b'cze we stop the propagation on button. So the child doesn't going to the parent.


// 4️⃣ stopImmediatePropagation();
// With this we can stop the propagation  immediately.

button.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  console.log("Button1");
});

button.addEventListener("click", function (event) {
  console.log("Button2");
});

// In output we can see Only "Button1" is printing , b'cze we stop the propagation immediately  after 1st event listener, so it won't go ahead.