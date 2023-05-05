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

function generateOTP() {
    // Define all possible characters that can be included in the OTP
    const chars = "0123456789";
  
    // Define the length of the OTP
    const length = 6;
  
    let otp = "";
    for (let i = 0; i < length; i++) {
      // Choose a random character from the list of possible characters
      const randomIndex = Math.floor(Math.random() * chars.length);
      const randomChar = chars[randomIndex];
  
      // Add the random character to the OTP string
      otp += randomChar;
    }
  
    // Display the OTP in an alert
    alert(`Your OTP is: ${otp}`);
  
    return otp;
  }
  
