"use strict";
// Q10 - Write a program that takes the number of units consumed by a user 
// if it is greater than 100 then add 10% tax 
// if greater than 200 then add 15% of tax so on up to 
// if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.\
var unitRate = 55;
var consumUnit = 49;
var bill = unitRate * consumUnit;
var tax1 = 0.1 * bill;
var tax2 = 0.15 * bill;
var tax3 = 0.25 * bill;
if (consumUnit >= 0 && consumUnit <= 200) {
    console.log("Consum Unit above the 100 add 10% tax", bill + tax1);
}
else if (consumUnit > 200 && consumUnit <= 500) {
    console.log("Consum Unit above the 200 add 15% tax", bill + tax2);
}
else {
    console.log("Consum Unit above the 500 add 25% tax", bill + tax3);
}
