// Q10 - Write a program that takes the number of units consumed by a user 
// if it is greater than 100 then add 10% tax 
// if greater than 200 then add 15% of tax so on up to 
// if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.\
var unitRate:number=55
var consumUnit:number=210
var bill:number=unitRate*consumUnit
if (consumUnit>100) 
{
        console.log("Consum Unit above the 100 add 10% tax",bill+(bill*(10/100)))  
} else if (consumUnit>200 && consumUnit<500) 
{
    console.log("Consum Unit above the 200 add 15% tax",bill+(bill*(15/100)))    
} else 
{
    console.log("Consum Unit above the 500 add 25% tax",bill=(bill*(25/100)))    
}    

