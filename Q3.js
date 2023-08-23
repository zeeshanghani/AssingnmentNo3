"use strict";
//Q3 - Write a program that converts given number of days in to weeks and days 
// //such as 17
// var num1:number=27
// var weeks:number=num1/7
// // var weekDays= Math.floor(weeks) 
// var days:number=num1%7
// console.log("Show weeks", weeks," and days",days)
var num = 138;
var weeks = num / 7;
var roundWeek = Math.floor(weeks);
var days = num % 7;
console.log("weeks =", roundWeek, "days =", days);
