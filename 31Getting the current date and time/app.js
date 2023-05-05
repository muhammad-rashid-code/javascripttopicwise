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

// var date=new Date();
//console.log(date.getDate());// OutPut:4
//console.log(date.getFullYear());// OutPut: 2023
//console.log(date.getMonth()+1);//OutPut: 5
//console.log(date.getTimezoneOffset());//OutPut: -300;

// var date=new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[date.getDay()]); //OutPut: Thu

// var date=new Date();
// var diff=date.getTime();
// //console.log(date.getTime());// OutPut 1683171179801 milli second from jan 1st 1970

// var date1=new Date();
// //console.log(date.getTime()); //OutPut 
// console.log(date1.getTime()-diff.getTime()); //consfuion

// let now = new Date();
// console.log(now.getTime());

// let now1 = new Date();
// console.log(now1.getTime());

// console.log(now1.getTime() - now.getTime());

// const now=new Date();
// const later=new Date(now.getTime());
// console.log(getDaysDiff(now,later));

//getting current date:
// var currentDate=new Date();
// console.log(currentDate.getTime());

// Getting Current Date;
// var today=new Date();
// var myBirth=new Date("April 04,1994");

// var msToday=today.getTime();
// var msMyBirth=today.getTime();
// var msDiff=msToday-msMyBirth;
// var dayDiff=msDiff/(1000*60*60*24);
// dayDiff=Math.floor(dayDiff);"June 30, 2035"

// console.log

// var msDiff=new Date().getTime-new Date("Aprin 04, 1994");
// var myBirth=Math.floor(msDiff/1000*60*60*24);
// console.log(myBirth);

//var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
//var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));

// var msDiff = new Date().getTime() - new Date("April 04, 1994").getTime();
// var myBirth = Math.floor(msDiff / 1000 * 60 * 60 * 24);
// console.log(myBirth);

var msDiff = new Date().getTime() - new Date("April 04, 1994").getTime();
var myBirth = Math.floor(msDiff / (1000 * 60 * 60 * 24));
console.log(myBirth);
