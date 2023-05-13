// You can use JavaScript to set CSS styles on HTML elements. Here's an example:
// <button id="myButton" onclick="changeStyle()">Click me</button>

// <script>
//   function changeStyle() {
//     var button = document.getElementById("myButton");
//     button.style.backgroundColor = "blue";
//     button.style.color = "white";
//     button.style.border = "none";
//     button.style.padding = "10px";
//     button.style.borderRadius = "5px";
//   }
// </script>
// In this example, we have a button element with an ID of "myButton". When the button is clicked, the changeStyle() function is called. This function gets the button element by its ID, and then sets various CSS styles on it using the style property.

// The style property is an object that contains all the inline styles for the element. You can set individual styles on the element by accessing its properties, using camelCase notation for CSS property names. For example, to set the background-color property, you would use backgroundColor. Similarly, border-radius becomes borderRadius.

// In this example, we're setting the button's background color to blue, text color to white, removing the border, setting the padding to 10px, and rounding the corners with a border-radius of 5px. These styles are all set dynamically, using JavaScript.