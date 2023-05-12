// // In JavaScript, functions can return a value to the caller using the return statement. The return statement stops the execution of the function and specifies the value to be returned to the caller.

// For example, let's say you have a function that takes two parameters and returns their sum:

function addNumbers(num1, num2){
return num1 + num2;
}
// //You can call this function and pass it two numbers, and it will return their sum:
// let result=addNumbers(3,8);
// console.log(result);//OutPut:8

// In this example, the addNumbers() function takes two parameters num1 and num2, adds them together using the + operator, and returns the result using the return statement.

// You can also store the returned value in a variable, as shown in the example above. This allows you to use the result of the function in further calculations or to display it to the user.

// // // Note that a function can only return a single value. However, you can return multiple values by wrapping them in an object or an array. For example:

// // function getPerson(){
// // return{name:"john",age:"30"};
// // }
// // let person=getPerson();
// // console.log(person.name);//OutPut:john
// // console.log(person.age);// OutPut:30
// In this example, the getPerson() function returns an object with two properties, name and age. The caller can then access these properties using the dot notation.

// function calculateTax(price,taxrate){
//     let taxAmount=price*taxrate;
//     let totalPrice=price*taxAmount
//     return{taxAmount: taxAmount, totalPrice: totalPrice};
// }
// let result = calculateTax(100,0.2)
// console.log(result.taxAmount);//OutPut 20
// console.log(result.totalPrice);//OutPut 2000

// // In this example, the calculateTax() function takes two parameters, price and taxRate. It calculates the tax amount by multiplying the price by the taxRate, and then adds it to the price to get the totalPrice. The function then returns an object with two properties, taxAmount and totalPrice, which can be accessed by the caller.

// function calculateTax(price,taxrate){
//     let taxAmount=price*taxrate;
//     let totalPrice=price+taxAmount
//     return{taxAmount: taxAmount, totalPrice: totalPrice};
// }
// let result = calculateTax(100,0.2)
// console.log(result.taxAmount);// OutPut 20
// console.log(result.totalPrice);//OutPut 120