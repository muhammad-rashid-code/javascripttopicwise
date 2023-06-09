// In JavaScript, you can find segments of a string using various string methods. Here are a few examples:

// // 1;substring() method: This method returns the characters of a string between two specified indices. For example:
// let string="Hello,World!";
// let segments=string.substring(0,6);
// console.log(segments)
// // In this example, the substring() method is used to extract the first five characters of the string.

// // 2;slice() method: This method extracts a section of a string and returns it as a new string. For example:
// let string="Hello,World!";
// let segments=string.slice(0,5);
// console.log(segments);
// // In this example, the slice() method is used to extract the first five characters of the string.


// // 3;substr() method: This method returns the characters in a string starting at a specified position and continuing for a specified number of characters. For example:
// let string="Hello,World!"
// let segments=string.substr(0,5)
// console.log(segments)
// // In this example, the substr() method is used to extract the first five characters of the string.

// //4:indexOf() method: This method returns the position of the first occurrence of a specified value in a string. For example:
// let string="Hello, World!";
// let index=string.indexOf("World!");
// console.log(index);
// //In this example, the indexOf() method is used to find the position of the substring "world" within the string.

// // 5;lastIndexOf() method: This method returns the position of the last occurrence of a specified value in a string. For example:
// let string="Hello, World!";
// let index = string.lastIndexOf("o");
// console.log(index);
// // In this example, the lastIndexOf() method is used to find the position of the last occurrence of the character "o" in the string.

// // These are just a few examples of the many string methods available in JavaScript that can be used to find segments of a string.

 //__________________SirIshaqBhojani_______________________
//  let text = "This Is An Apple";
//  console.log(text.indexOf("Apple")); //OutPut:11

// let text = "This Is An Apple";
//  console.log(text.indexOf("Orange"));//OutPut:-1
//The above FUNCTION Will be show result -1 Which means |Orange does not exist

// let text = "This Is An Apple";
// console.log(text.indexOf("Orange"))!== -1;//OUyPUt :this code will be run in console;

// let text = "This is An Apple";
// console.log(text.indexOf("is"))//OutPut:2

// let text = "This is An Apple";
// console.log(text.lastIndexOf("is"));//OutPut : 5

// let text = "This Is An Apple";
// console.log(text.slice(0,1));// OutPut:T

// let text = "This Is An Apple";
// console.log(text.charAt(0));// OutPut:T

// let text = "This Is An Apple";
// console.log(text.charAt(8));// OutPut:A

// let text = "This Is An Apple";
// console.log(text.charAt(11));// OutPut:A

let text = "This Is An Apple";
console.log(text.charAt (text.length-1));// OutPut:e

