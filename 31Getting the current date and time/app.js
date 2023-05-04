// In JavaScript, you can get the current date and time using the built-in Date object. The Date object represents a specific moment in time, and you can use its methods to get various parts of the date and time.

// //To get the current date and time, you can create a new Date object without passing any arguments. This will create a Date object with the current date and time:
// let now=new Date();
// alert(now);

//To get specific parts of the date and time, you can use the getDate(), getMonth(), getFullYear(), getHours(), getMinutes(), and getSeconds() methods:

// let now=new Date();
// let year=now.getFullYear();
// let month=now.getMonth()+4;//january is 0
// let day=now.getDay();
// let hours=now.getHours();
// let minutes=now.getMinutes();
// let seconds=now.getSeconds();


// // console.log("${year}-${month}-${day} ${hours}:${minutes}:${seconds}")
// //console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
// console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
//Note that the getMonth() method returns a zero-based index, so you need to add 1 to get the actual month number.

//__________________SirIshaqBhojani_______________________
// var date=new Date();
// // console.log(date); //OutPut:Thu May 04 2023 08:09:14 GMT+0500 (Pakistan Standard Time)
// console.log(date.toString());//OutPut:'Thu May 04 2023 08:12:58 GMT+0500 (Pakistan Standard Time)'

//var date=new Date();
//console.log(date.getDate());// OutPut:4
//console.log(date.getFullYear());// OutPut: 2023
//console.log(date.getMonth()+1);//OutPut: 5
//console.log(date.getTimezoneOffset());//OutPut: -300;