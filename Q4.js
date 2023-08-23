"use strict";
/*Q4 - Write a program that calculates the discount for a product based on its price.
If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount*/
var price = 101;
if (price > 100) {
    console.log("price above 100$ get 10% discount", price * (10 / 100));
}
else {
    console.log("price less 100$ get 05% discount", price * (5 / 100));
}
