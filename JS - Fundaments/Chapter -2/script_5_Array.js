`use strict`;

/***************ARRAY ALWAYS START FROM 0 INDEX*******************/

// ARRAY Declarations and Syntax

// Syntax 1 : literal syntax
const friends = ["Sam", "John", "Ankit", "Simon"];

const years = [1999, 2000, 2001, 2002];

//Suntax 2 : Array Function
const years_Of = new Array(1999, 2000, 2001, 2002, 20022);

//output

console.log(friends);
console.log(years_Of);

//Finding elements in Array from index
console.log(years_Of[0]); // 0 NUMBER INDEX
//Find Length of an Array
console.log(friends.length);

// ----------------------------- Exercise 1 -----------------------------

const ageCalculation = (birthYear) => 2022 - birthYear;

const age1 = ageCalculation(years[0]);
console.log(`${age1} years old`); //output : 2022 - 1999 = 23 years old

/*

----------------------------- Array Mathods -----------------------------

1. .length - find the length of an array
2. .push () - add a new element to the end 
3. .unshift () - add a new element at the beginning 
4. .pop () - remove element from the end
5. .shift () - remove element from the beginning
6. .indexOf () - finding index by element name
7. .inclludes () -  finding index by element name by boolean result 

example below : 
*/

const lastBenchers = ["Adam", "Mosha", "Adnan", "Sam"];

lastBenchers.push("adnani");
lastBenchers.push("oliver", "chris");
lastBenchers.unshift("Baaz");
lastBenchers.shift();
lastBenchers.pop();

console.log(lastBenchers.length);
console.log(lastBenchers);
console.log(lastBenchers.indexOf("Baaz")); // this one is not in the index so output will be : -1
console.log(lastBenchers.indexOf("Mosha")); // output : index is 1
console.log(lastBenchers.includes("oliver")); // output : true
console.log(lastBenchers.includes("chris")); // output : false
