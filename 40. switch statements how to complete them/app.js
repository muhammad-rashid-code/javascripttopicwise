// //To complete a switch statement in JavaScript, we can use the break keyword to exit the switch block after executing the code within a matched case. The break keyword prevents the execution of any additional case blocks that follow the matched case.

// //For example, consider the following switch statement:
// // let day="monday"
// // switch (day){
// // case "monday":
// //     console.log("today is monday.");
// //     break;
// //     case "tuesday":

// //     console.log("today is tueday");
// // break;
// // case "wedneday"
// // console.log("today is wednesday");
// // break;
// // }

// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday.");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday.");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday.");
//     break;
// }

// Then, the execution of the switch statement will continue after executing the code within the first case block, and the code within the remaining case blocks will also execute. In this case, if day is equal to "Monday", the code within the first case block will execute, printing "Today is Monday." However, because there is no break statement at the end of the first case block, the execution of the switch statement will continue to the next case block, executing the code within it, and so on, printing "Today is Tuesday." and "Today is Wednesday."
