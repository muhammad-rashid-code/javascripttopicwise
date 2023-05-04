// //In JavaScript, strings are a sequence of characters enclosed in single or double quotes. To measure the length of a string, you can use the length property:
// let string="Hello, World!"
// console.log(string.length);

//To extract parts of a string, you can use various methods such as substring(), substr(), and slice().

// //The substring() method extracts the characters between two specified indices and returns a new string. The first argument is the starting index, and the second argument is the ending index (exclusive):
// let string="Hello, World!";
// // console.log(string.substring(0,5));// OutPut: Hello
// console.log(string.substring(7))

// The substr() method is similar to substring(), but the second argument specifies the length of the extracted substring:

// // //You can also use negative indices to count from the end of the string:
// // let string="Hello, World!";
// // console.log(string.slice(-6));

// let string="Hello, World!";
// console.log(string.substring(-6)); // OutPut: not valid

//__________________SirIshaqBhojani_______________________
// let text="This Is An Apple";
// //console.log(text.length);
// console.log(text.slice(0,4));

// let text="This Is An Apple";
// //console.log(text.length);
// console.log(text.slice(-5)); OutPut:Apple

// let text="This Is An Apple";
// //console.log(text.length);
// console.log(text.slice(11,16));//OutPut:Apple

// let text="This Is An Apple";
// //console.log(text.length);
// console.log(text.slice(11));//OutPut:Apple