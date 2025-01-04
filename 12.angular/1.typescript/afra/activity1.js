"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1.Write TypeScript code to prompt the user to enter their age and store the entered value in a variable called userage. Then, log userAge to the console.
var promptSync = require("prompt-sync");
var prompt = promptSync();
var userage = prompt("Enter your age:");
var userAge = parseInt(userage);
console.log("user's age is ", userAge);
//2.calculate area of rectangle
var length = prompt("Enter length of a rectangle:");
var width = prompt("Enter width of a rectangle:");
var Length = parseFloat(length);
var Width = parseFloat(width);
var area = Length * Width;
console.log("Area of the rectangle is ", area);
//3.Even or Odd Number
var num = parseInt(prompt("Enter a Number to check whether EVEN or ODD:"));
if (num % 2 == 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}
//4.Factorial of a number
var fact = parseInt(prompt("Enter the number to find Factorial:"));
var factorial = 1;
for (var i = 1; i <= fact; i++) {
    factorial *= i;
}
console.log("Factorial of the given number is :", factorial);
//5.calculate the square of a number using arrow function
var sqr = parseFloat(prompt("Enter a number to find its square:"));
var square = function (num) { return num * num; };
console.log("square is:", square(sqr));
//6.Filter Even Numbers from an Array using Arrow Function
var arr = [55, 74, 85, 12, 35, 95, 66, 20];
var evenNumberArr = arr.filter(function (num) { return num % 2 === 0; });
console.log("Even numbers are:", evenNumberArr);
