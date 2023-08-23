"use strict";
//Q6 - Write a program that takes temperature and check it. 
//If it is cold then suggest the user to wear warm clothes 
//and so on according to the weather.
var temperature = 15;
if (temperature < 18) {
    console.log("its cold weather suggest wear warm clothes");
}
else if (temperature > 18 && temperature < 33) {
    console.log("its normal weather suggest wear causal clothes");
}
else {
    console.log("its warm weather duggest wear lightweight clothes");
}
