console.log("Helllo !");

//variables : let use to initialize / declare

let name = "SAM"; // direct name variable using is not allowed in Javascript
let number = 10;
let temperature = 30;
let device = "laptop";

// printing variable
console.log(name);
console.log(temperature);

//variable naming convention (Camel Case)
let LaptopBrand = "DELL";
console.log(LaptopBrand);
let laptop_ram = 3;
// we can write variable name using dollar sign
let $laptop_performance = "Exilent";
// let Name ="sam"; // First word should not be uppercase is javascript

/*
Data Types : object or primitive

primitive :
1.Number (integer , floating)
2.array
3.string
4.boolean
5.undefined
6.null // **typeof null is not object which is bug in Javascript****
7.symbol "new data type"
8.bigInt "new data type" for big size of integer 
*/

let todayTemparature = 32;
let todayIs = "Monday";
let isProgramming_fun = true;
let isitRainyDay = false;
let restingAtHome;
let carSpeed = null;
const birthYearof = 1999; // its constant value now ..and we can't reassign it
// Printing what Data type are in the Variable : using ***(typeof)*** function
var firstboy = "samscore"; // we can use var to declare variable but we should  not use it ,cause it's quite bit old;

console.log(typeof todayTemparature);
console.log(typeof todayIs);
console.log(typeof isProgramming_fun);
console.log(typeof isitRainyDay);
console.log(typeof restingAtHome);
console.log(carSpeed);
console.log(typeof carSpeed); // null is not an object .it's bug

console.log(firstboy, birthYearof);

//--------------------------------mathmatical part ------------------------------------------------

const currentYear = 2022;
const ageOfShahed = currentYear - 1998;
const ageofShahbaaz = currentYear - 2000;

console.log(ageOfShahed); // output is age = 24;
console.log(ageOfShahed ** 2); // it means "2 to the power of 24 (24^2)=576"

//sum of two string :

const firstName = "Shah'baaz";
const lastName = "Shahed";
const fullName = firstName + " " + lastName;

console.log(firstName + lastName); // output is = Shah'baazShahed
console.log(firstName + " " + lastName); // output is = Shah'baaz Shahed
console.log(fullName); // output is = Shah'baaz Shahed

//assignment opperators :

let number_for_sum = 20 + 10;
number_for_sum += 15; // output is 45
number_for_sum -= 10; // output is 35

number_for_sum++; // it means // number +=1 // number + 1;
number_for_sum--; // it means // number -=1 // number - 1;

console.log(number_for_sum); //

//comparison opperators (<,>,<=,>=) :
console.log(ageOfShahed < ageofShahbaaz); // output is : false;
