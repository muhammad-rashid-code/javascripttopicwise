// To target all elements of a specific tag name using JavaScript, you can use the getElementsByTagName() method. Here's an example:
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// <script>
//   var listItems = document.getElementsByTagName("li");
//   for (var i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = "red";
//   }
// </script>
// In this example, we have an unordered list (<ul>) containing three list items (<li>). We want to change the text color of all the list items to red. To do this, we use the getElementsByTagName() method to get all the list items, and then loop through them using a for loop. Inside the loop, we set the color property of each list item to "red" using JavaScript.

// Note that the getElementsByTagName() method returns a live HTMLCollection, which means that if the DOM changes (for example, if you add or remove elements), the collection will be automatically updated to reflect the changes. If you want to work with a static list of elements, you can convert the HTMLCollection to an array using Array.from(), like this

// var listItems = Array.from(document.getElementsByTagName("li"));

// This will give you an array of list items that you can work with like any other array.