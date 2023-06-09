// In JavaScript, you can round numbers using the built-in Math object. The Math object provides several methods for rounding numbers, including Math.round(), Math.floor(), and Math.ceil().

// // The Math.round() method rounds a number to the nearest integer. If the number is halfway between two integers, the method rounds to the nearest even integer. Here is an example:
// let num=3.5;
// let rounded=Math.round(num)
// console.log("The rounded number is: " +rounded);
// //In this example, the Math.round() method is used to round the number 3.5 to the nearest integer. The rounded number is then stored in the variable rounded, and the output will be "The rounded number is: 4".

// //The Math.floor() method rounds a number down to the nearest integer. Here is an example:
// let number=3.9;
// let rounded=Math.floor(number);
// console.log("The rounded number is: " + rounded);
// // In this example, the Math.floor() method is used to round the number 3.9 down to the nearest integer. The rounded number is then stored in the variable rounded, and the output will be "The rounded number is: 3".

// The Math.ceil() method rounds a number up to the nearest integer. Here is an example:
// let num=3.1;
// let rounded=Math.ceil(num);
// console.log("The rounded number is: " + rounded);
// // In this example, the Math.ceil() method is used to round the number 3.1 up to the nearest integer. The rounded number is then stored in the variable rounded, and the output will be "The rounded number is: 4".

// Note that all of these methods return a new rounded number and do not modify the original number.
//__________________SirIshaqBhojani_______________________

// var num =5.87;
// console.log(Math.round(num));// OUtput : 6

// var num =5.99;
// console.log(Math.ceil(num));//OutPut;5

// var num = 5.11;
// console.log(Math.ceil(num));//OutPut:6

// var num=5.11;
// console.log(Math.floor(num));//OutPut:5

// var num=5.99;
// console.log(Math.floor(num));//OutPut:5

// let num=1;
// console.log(Math.random()*10)

// let guess = +prompt("Guess A Number");
// let num = Math.floor(Math.random() * 10);
// if (guess === num) {
//     alert("You Won The Number IS " + num);


// }
// else if (num + 1 === guess || num - 1 === guess) {
//     alert("You were Close The Number Is " + num);
// }
// else {
//     alert("You Lose The Number Is " + num);
// }
