// To swap images using JavaScript, you can use the same approach as changing the image source that we discussed earlier. Here's an example:
// <img id="myImage" src="image1.jpg" onclick="swapImage()">

// <script>
//   function swapImage() {
//     var image = document.getElementById("myImage");
//     if (image.src.match("image1.jpg")) {
//       image.src = "image2.jpg";
//     } else {
//       image.src = "image1.jpg";
//     }
//   }
// </script>
// In this example, we have an img element with an ID of "myImage" and a src attribute pointing to "image1.jpg". When the image is clicked, the swapImage() function is called. This function gets the image element by its ID, and then checks the current value of its src attribute using a regular expression. If the src attribute currently contains "image1.jpg", then the function sets it to "image2.jpg". Otherwise, it sets it back to "image1.jpg". This effectively swaps the image displayed on the page between "image1.jpg" and "image2.jpg" each time the image is clicked.