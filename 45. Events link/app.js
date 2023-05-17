// JavaScript events are actions or occurrences that happen in the browser, such as a user clicking a button or a page finishing loading. JavaScript can detect these events and execute code in response to them. Here are some common events in JavaScript:

// 1.Click event: Occurs when a user clicks an element, such as a button or a link.
// 2.Submit event: Occurs when a user submits a form.
// 3.Mouseover event: Occurs when a user moves the mouse over an element.
// 4.Load event: Occurs when a web page finishes loading.
// 5.Keydown event: Occurs when a user presses a key on the keyboard.
// 6.Resize event: Occurs when the browser window is resized.
// 7.Scroll event: Occurs when the user scrolls the page.

// To handle events in JavaScript, you can use the addEventListener() method, which attaches an event listener to an element. The syntax is as follows:

// element.addEventListener(eventType, eventHandler);

// Here, element is the DOM element that you want to attach the event listener to, eventType is the type of event you want to handle (e.g. "click" or "submit"), and eventHandler is the function that should be executed when the event occurs.   

// For example, the following code adds a click event listener to a button and displays an alert when the button is clicked:

// <button id="myButton">Click me</button>

// <script>
//   var button = document.getElementById("myButton");
//   button.addEventListener("click", function() {
//     alert("Button clicked!");
//   });
// </script>

// In this code, document.getElementById("myButton") retrieves the button element from the DOM, and addEventListener("click", function() { alert("Button clicked!"); }) attaches a click event listener to the button. When the button is clicked, the anonymous function that displays the alert is executed.

// For more information on JavaScript events and event handling, you can refer to the following resources:

// MDN Web Docs: Events
// W3Schools: JavaScript Events

// sir ishaq bhojani

// function test (val){
// console.log(val)
// }

function test (val){
console.log(val);
}