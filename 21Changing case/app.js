//JavaScript provides several methods to change the case of strings, including:

// //1.toUpperCase(): This method converts all characters of a string to uppercase.
// let myString="hello, world";
// console.log(myString.toLocaleUpperCase());

// //2.toLowerCase(): This method converts all characters of a string to lowercase.
// let mySting="HELLO, WORLD!";
// console.log(mySting.toLowerCase());

// //3.charAt() and slice(): These methods can be used together to change the case of specific characters in a string.
// let myString="Hello, World!";
// let charIndex=6;
// let newString=myString.slice(0,charIndex)+myString.charAt(charIndex).toLowerCase()+myString.slice(charIndex+1);
// console.log(newString);//Output: "Hello wOrld"(wrong)
// //In this example, the charAt() method is used to get the character at index 6, which is the letter "W". Then, the toLowerCase() method is used to convert that character to lowercase. Finally, the slice() method is used to concatenate the original string up to the changed character, the changed character, and the rest of the original string. The result is the string with only the "W" changed to lowercase.

// ____________SirIshaqBhojani________________________
// var text="This IS An Apple";
// console.log(text.toLowerCase());

// var text="This IS An Apple";
// console.log(text.toUpperCase());

// var text="This IS An Apple";
// //console.log(text.toUpperCase());
// var text=text.toUpperCase();
// console.log(text)

