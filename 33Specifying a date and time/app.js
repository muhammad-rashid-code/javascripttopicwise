//In JavaScript, you can specify a date and time using the built-in Date object. Here's an example of how to create a Date object with a specific date and time:

// Create a new Date object with the specified date and time
//const date = new Date('2023-05-05T12:30:00');

// Output the date and time
//console.log(date); // Output: Fri May 05 2023 12:30:00 GMT+0000 (Coordinated Universal Time)
//In the example above, the Date object is created with the string '2023-05-05T12:30:00', which represents the date and time May 5th, 2023 at 12:30 PM. The T character in the string separates the date and time, and the time is specified in the 24-hour format.

// //You can also specify the date and time using separate arguments to the Date constructor, like this:
// // Create a new Date object with separate date and time arguments
// const date = new Date(2023, 4, 5, 12, 30, 0);

// // Output the date and time
// console.log(date); // Output: Fri May 05 2023 12:30:00 GMT+0000 (Coordinated Universal Time)
// //In this example, the Date object is created with the arguments (2023, 4, 5, 12, 30, 0), which represent the year, month (0-based), day, hour, minute, and second of the date and time you want to create. Note that the month is zero-based, so May is represented by the value 4 rather than 5.

//______________SirIshaqBhojani_________________
// var today=new Date();
// var doomsDay=new Date("june 30, 2035");

// var msToday=today.getTime();
// var msDoomsDay=doomsDay.getTime();

// var midDiff=msDoomsDay-msToday
// var dDiff=midDiff/(1000*60*60*24);
// console.log(midDiff);