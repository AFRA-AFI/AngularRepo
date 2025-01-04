/* 1.Given 3 ints a,b,c return true if it is possible to add two of the int to get the 3rd.
There should only a single line of code in the method body.*/
var isPossible = function (a, b, c) { return (a + b === c) || (a + c === b) || (b + c === a); };
console.log(isPossible(2, 3, 5)); // true
console.log(isPossible(1, 2, 4)); // false
// 2.Print a  message using typescript
var message = "Hello, TypeScript!";
console.log(message);
/* 3.Given 3 ints 1,2,4 return true if 2nd is greater than 1st and 3rd is greater than 2nd .
however, with the exception that if the parameter “itsOk” is true.
2nd does not need to be greater than 1st but still be less than 3rd.*/
var checkIntegers = function (a, b, c, itsOk) {
    if (itsOk) {
        return b < c;
    }
    else {
        return b > a && c > b;
    }
};
console.log(checkIntegers(1, 2, 4, false)); // true
console.log(checkIntegers(2, 1, 4, true)); // true
console.log(checkIntegers(1, 3, 2, false)); // false
