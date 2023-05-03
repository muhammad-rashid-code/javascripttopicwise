//In JavaScript, you can convert strings to integers and decimals using the parseInt() and parseFloat() functions, respectively.

// //The parseInt() function is used to convert a string to an integer. It takes two arguments: the string to be converted, and the radix or base of the number system being used (usually 10). Here is an example:
// let numString="123"
// let numInt=parseInt(numString,10);
// console.log("The integer is:" +numInt);
// //In this example, the string "123" is converted to an integer using the parseInt() function with a radix of 10. The resulting integer is then stored in the variable numInt, and the output will be "The integer is: 123".

// //The parseFloat() function is used to convert a string to a decimal. It takes a single argument: the string to be converted. Here is an example:
// let decimalString="3.14";
// let decimalNum=parseFloat(decimalString);
// console.log("The decimal is: " + decimalNum)
// //In this example, the string "3.14" is converted to a decimal using the parseFloat() function. The resulting decimal is then stored in the variable decimalNum, and the output will be "The decimal is: 3.14".
//Note that if the string being converted cannot be parsed as a number, both parseInt() and parseFloat() will return NaN (Not a Number). It is important to check for this when using these functions, to avoid unexpected behavior in your code.