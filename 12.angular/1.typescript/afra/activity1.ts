//1.Write TypeScript code to prompt the user to enter their age and store the entered value in a variable called userage. Then, log userAge to the console.
import * as promptSync from 'prompt-sync'
const prompt=promptSync();
const userage=prompt("Enter your age:");
const userAge=parseInt(userage);
console.log("user's age is ",userAge);

//2.calculate area of rectangle
const length=prompt("Enter length of a rectangle:");
const width=prompt("Enter width of a rectangle:");
const Length=parseFloat(length);
const Width=parseFloat(width);
const area=Length*Width;
console.log("Area of the rectangle is ",area);

//3.Even or Odd Number
const num:number=parseInt(prompt("Enter a Number to check whether EVEN or ODD:"));
if(num%2==0){
    console.log("Even Number")
}else{
    console.log("Odd Number");
}

//4.Factorial of a number
var fact:number=parseInt(prompt("Enter the number to find Factorial:"));
var factorial:number=1;
for(let i=1;i<=fact;i++){
    factorial*=i;
}
console.log("Factorial of the given number is :",factorial);

//5.calculate the square of a number using arrow function
var sqr:number=parseFloat(prompt("Enter a number to find its square:"));
var square=(num:number)=>num*num;
console.log("square is:",square(sqr));

//6.Filter Even Numbers from an Array using Arrow Function
const arr:number[]=[55,74,85,12,35,95,66,20];
const evenNumberArr:number[]=arr.filter(num=>num%2===0);
console.log("Even numbers are:",evenNumberArr);