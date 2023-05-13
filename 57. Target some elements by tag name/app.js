// To target some specific elements by tag name using JavaScript, you can use the getElementsByTagName() method in combination with other selectors like class names, IDs or attributes. Here are a few examples:
// 1.Targeting all the paragraphs with a specific class:

// <p class="my-class">This is paragraph 1.</p>
// <p>This is paragraph 2.</p>
// <p class="my-class">This is paragraph 3.</p>

// <script>
//   var myClassParagraphs = document.getElementsByTagName("p");
//   for (var i = 0; i < myClassParagraphs.length; i++) {
//     if (myClassParagraphs[i].classList.contains("my-class")) {
//       myClassParagraphs[i].style.color = "red";
//     }
//   }
// </script>
// In this example, we use the getElementsByTagName() method to get all the paragraphs (<p>), and then loop through them using a for loop. Inside the loop, we use the classList.contains() method to check if each paragraph has a class of "my-class". If it does, we set its color property to "red".

// 2.Targeting all the inputs with a specific attribute:
// <input type="text" data-validate="true">
// <input type="text">
// <input type="text" data-validate="true">

// <script>
//   var validateInputs = document.getElementsByTagName("input");
//   for (var i = 0; i < validateInputs.length; i++) {
//     if (validateInputs[i].hasAttribute("data-validate")) {
//       validateInputs[i].addEventListener("focus", function() {
//         this.style.borderColor = "blue";
//       });
//       validateInputs[i].addEventListener("blur", function() {
//         this.style.borderColor = "";
//       });
//     }
//   }
// </script>
// In this example, we use the getElementsByTagName() method to get all the input elements (<input>), and then loop through them using a for loop. Inside the loop, we use the hasAttribute() method to check if each input has a data-validate attribute. If it does, we add two event listeners to the input: one for the focus event, and one for the blur event. These event listeners change the input's border color to blue when it is focused, and back to its default color when it loses focus.

// By combining the getElementsByTagName() method with other selectors, you can target specific elements and apply different styles or behaviors to them.
