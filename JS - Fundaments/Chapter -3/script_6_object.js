`use strict`;

// Object : literal Syntax

// here, student is an object and inside obejct all are properties

const student = {
  firstName: "Summer",
  lastName: "sam",
  age: 2022 - 1999,
  job: "programmer",
  friends: ["Ankit", "Chris", "Adnan", "Oliver"],
  isGoodAtGame: true,
};

console.log(student);

/*
Finding properties using Two methods :

1. dot method
2.braket nothion

*/

// 1. dot methods (using) to find individual properties

console.log(student.firstName);
console.log(student.friends);
console.log(student.friends[2]);

// 2. braket nothion (using) to find individual properties
// we can use expressions here

console.log(student["job"]);

console.log(student["isGoodAt" + "Game"]); //using expression

// Exercise 1 : Prompt () methods

/* if you write any massage in prompt then ,
This prompt mathod will popup your massage and you can have
 properties from object by answering the massage
*/

const interestIn = prompt("Leave us what do you want to know about student?");

if (student[interestIn]) {
  console.log(student[interestIn]);
} else {
  console.log("Invaild key!");
}

//Exercise 2 : (Prompt using Ternary Operators)
const whatDoYouKnow = prompt("What do you want to know ?");

const answerPrompt = student[whatDoYouKnow]
  ? student[whatDoYouKnow]
  : "Invaild Result!";

console.log(answerPrompt);
