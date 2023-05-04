// In JavaScript, you can extract different parts of the date and time from a Date object using its built-in methods. Here are some common methods that you can use:

// // getFullYear(): Returns the year (4 digits).
// // getMonth(): Returns the month (0-11).
// // getDate(): Returns the day of the month (1-31).
// // getDay(): Returns the day of the week (0-6), where 0 is Sunday and 6 is Saturday.
// // getHours(): Returns the hour (0-23).
// // getMinutes(): Returns the minutes (0-59).
// // getSeconds(): Returns the seconds (0-59).
// // getMilliseconds(): Returns the milliseconds (0-999).
// // Here's an example of how you can use these methods to extract parts of the current date and time:

// let now = new Date();

// let year = now.getFullYear();
// let month = now.getMonth() + 1; // Month is zero-indexed, so add 1
// let day = now.getDate();
// let dayOfWeek = now.getDay();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();
// let milliseconds = now.getMilliseconds();

// console.log(`Current date and time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`);
// console.log(`Day of the week: ${dayOfWeek}`);//OutPut:Current date and time: 2023-5-4 14:30:00.0 Day of the week: 2

//You can use these methods to extract different parts of a Date object and use them in your program as needed.

