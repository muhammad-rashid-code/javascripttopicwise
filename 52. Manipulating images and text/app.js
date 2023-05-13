// // // // To manipulate images and text using JavaScript, you can use various built-in methods and properties of the HTMLImageElement and HTMLElement objects. Here are some examples:
// // // //1.Changing the image source:
// // // <img id="myImage" src="image1.jpg">
// // // <button onclick="changeImage()">Change Image</button>

// // // <script>
// // //   function changeImage() {
// // //     var image = document.getElementById("myImage");
// // //     image.src = "image2.jpg";
// // //   }
// // // </script>
// // // In this example, we have an img element with an ID of "myImage" and a src attribute pointing to "image1.jpg". When the "Change Image" button is clicked, the changeImage() function gets the image element by its ID, and then sets its src attribute to "image2.jpg", effectively changing the image displayed on the page.

// // // .2Changing the text content:
// // <p id="myParagraph">This is some text.</p>
// // <button onclick="changeText()">Change Text</button>

// // <script>
// //   function changeText() {
// //     var paragraph = document.getElementById("myParagraph");
// //     paragraph.textContent = "This is new text!";
// //   }
// // </script>
// // In this example, we have a p element with an ID of "myParagraph" and some initial text content. When the "Change Text" button is clicked, the changeText() function gets the paragraph element by its ID, and then sets its textContent property to "This is new text!", effectively changing the text displayed on the page.

// //3.Applying styles:
// <p id="myParagraph">This is some text.</p>
// <button onclick="applyStyles()">Apply Styles</button>

// <script>
//   function applyStyles() {
//     var paragraph = document.getElementById("myParagraph");
//     paragraph.style.color = "red";
//     paragraph.style.fontSize = "24px";
//   }
// </script>
// In this example, we have a p element with an ID of "myParagraph" and some initial text content. When the "Apply Styles" button is clicked, the applyStyles() function gets the paragraph element by its ID, and then sets its style property to apply some CSS styles. In this case, we're setting the color property to "red" and the fontSize property to "24px", effectively changing the color and font size of the text displayed on the page.

// By using these and other similar methods and properties, you can manipulate images and text on your web page dynamically using JavaScript.