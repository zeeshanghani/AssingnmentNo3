"use strict";
//Q7 - Write a program that checks if the given number is  divisible 
//by 3 or 5 or both or not divisible by anyone show output accordingly.
var num = 66;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("num is divisible 3 & 5 both");
}
else if (num % 3 == 0 && num % 5 != 0) {
    console.log("num is divisible 3 but not by 5 ");
}
else if (num % 3 != 0 && num % 5 == 0) {
    console.log("num is not divisible 3 & divisible by 5 ");
}
else {
    console.log("num is not divisible 3 & 5 both");
}
