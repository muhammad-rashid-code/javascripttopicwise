//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("time: " + theHr + ":" + theMin);

// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
//     }

// function generateOTP() {
//     // Define all possible characters that can be included in the OTP
//     const chars = "0123456789";
  
//     // Define the length of the OTP
//     const length = 6;
  
//     let otp = "";
//     for (let i = 0; i < length; i++) {
//       // Choose a random character from the list of possible characters
//       const randomIndex = Math.floor(Math.random() * chars.length);
//       const randomChar = chars[randomIndex];
  


//       // Add the random character to the OTP string
//       otp += randomChar;
//     }
  
//     // Display the OTP in an alert
//     alert(`Your OTP is: ${otp}`);
  
//     return otp;
//   }
  
// function tellTime(params) {
//   var now =new Date();
//   var getHour=now.getHours();
//   var getMinutes=now.getMinutes();
//   alert("Current Time Is; "+getHour+":"getMinutes)
// }

// function tellTime() {
//    var now = new Date();
//    var theHr = now.getHours();
//    var theMin = now.getMinutes();
//    alert("Current time: "+ theHr + ":" + theMin);
//    }
  
//  tellTime();

// function telltime(params) {
//   var now = new Date();
//   var hour=now.getHours();
//   var getMinutes=now.getMinutes();
//   alert("Current Time is: "+hour+":"+getMinutes);

// }
// telltime();

// function add(x,y) {
//   alert(x%y);
// }
// add(2,3);
// function math(x,y) {
//   alert(x*y)
// }
// add(2,2)

// function add(x,y) {
//     alert(x*y);
//   }
//   add(2,2);

// function math(x,y) {
//   alert(x*y);
// }
// math(2,3);

// function math(x,y) {
//   return x,y; 

// }
// add(5,3 );
// var rest=add(5,3); 
// alert(rest)

// function math(x,y) {
//   return x+y;
// }
// var result = math(5,3);
// alert(result);

// var abc=10;
// function demo() {
  
//   console.log(abc);
//   var abc=20;       // hoistin
// }
// demo();
// Hoisting کو جاوا اسکرپٹ کی ایک میکانزم کہا جاتا ہے جو متغیرات اور فنکشنز کی تعریف کو ان کے حقیقی تعریف سے پہلے کردیتا ہے۔ یہ مطلب ہے کہ آپ ایک متغیر یا فنکشن کو اس سے پہلے بھی استعمال کرسکتے ہیں جبکہ ان کی حقیقی تعریف کردی ہو۔ جاوا اسکرپٹ خود ان تعریفات کو سکوپ کی اوپری سرحد پر منتقل کردیتا ہے۔

// var dayOfWk="Sat"
var dayOfWk=prompt("Enter Days Of Week");
switch(dayOfWk) {
   case "Sat" :
   alert("Whoopee");
   break;
   case "Sun" :
   alert("Whoopee");
   break;
   case "Fri" :
   alert("TGIF!");
   break;
   default :
   alert("Shoot me now!");
   }
