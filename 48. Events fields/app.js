//In JavaScript, you can handle events related to form fields on HTML pages using the addEventListener() method. Here are some examples of how to handle events related to form fields:

//1.Input Event:
// {/* <input type="text" id="myInput">

// <script>
//   var input = document.getElementById("myInput");

//   input.addEventListener("input", function() {
//     console.log("Input changed: " + input.value);
//   });
// </script> */}

//This example listens for changes to the input field's value and logs the new value to the console.

//.2 Focus Event:
// {/* <input type="text" id="myInput">

// <script>
//   var input = document.getElementById("myInput");

//   input.addEventListener("focus", function() {
//     console.log("Input focused!");
//   });
// </script> */}

//This example listens for the input field to receive focus and logs a message to the console.

//.3Blur Event:
// {/* <input type="text" id="myInput">

// <script>
//   var input = document.getElementById("myInput");

//   input.addEventListener("blur", function() {
//     console.log("Input blurred!");
//   });
// </script> */}

//This example listens for the input field to lose focus and logs a message to the console.

//4.Submit Event:
// {/* <form id="myForm">
//   <input type="text" name="name">
//   <input type="email" name="email">
//   <button type="submit">Submit</button>
// </form>

// <script>
//   var form = document.getElementById("myForm");

//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log("Form submitted!");
//     console.log("Name: " + form.name.value);
//     console.log("Email: " + form.email.value);
//   });
// </script> */}


// This example listens for the form to be submitted and logs the form data to the console. The event.preventDefault() method is used to prevent the default form submission behavior and allow us to handle the submission ourselves.

// In these examples, we use the addEventListener() method to attach a function to be executed when a specific event occurs on a form field or form element. The second argument of the addEventListener() method is a function that will be executed when the event is triggered. In the function, we can perform any action we want based on the event that occurred.

