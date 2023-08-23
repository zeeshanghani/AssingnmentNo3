"use strict";
/*Q5 - Create a program that determines the category of a user-provided age.
If the age is between 0 and 12, print "Child." If
 it's between 13 and 19, print "Teenager." Otherwise, print "Adult.*/
var age = 12;
if (age <= 12) {
    console.log("this person is child");
}
else if (age > 12 && age <= 19) {
    console.log("this person is teenager");
}
else {
    console.log("adult");
}
