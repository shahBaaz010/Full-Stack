"use strict"; // must write on the top to fint the bug and make your program perfect

/*
Funstions :
1. Function declarations
2. Function Expressions
3. Arrow Functions
4. Currying Functions
5. Anonymous Functions
6. Lambda Functions / lamda Calculas 

functional Program ( curry Function , Lambda Function , anonymous Function)
*/

function finderOddNumber(a) {
  if (a % 2 !== 0) {
    return `${a} is and Odd Number.`;
  } else {
    return `it's an Even Number.`;
  }
}

//finderOddNumber(11);// your need to write it in the console.log block

console.log(finderOddNumber(11));

//1.------------------------------Function Declarations --------------------------------

function addThreeNumbers(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  return sum; // returned type fucntion

  //type 4
  console.log(sum); // not returned type function
}
// Type 1
//addThreeNumbers(10, 20, 30);
// Type 2
console.log(addThreeNumbers(10, 20, 30));
//type 5
const a = 5;
const b = 6;
const c = 7;
console.log(addThreeNumbers(a, b, c));

//2. ----------------------------- Function Expression ---------------------------------

// Here, we can see the FUNCTION is turned into a Variable
// We can't call the function before the initialization / declaration

const juiceFactory = function (apples, oranges) {
  const juices = (apples * oranges) / 2;
  return `${juices} juices is ready using ${apples} apples and ${oranges} oranges. 🧃`;
};

console.log(juiceFactory(10, 15));

//3. --------------------------------- ARROW Function ----------------------------------------

// Here, we can see the FUNCTION is turned into a Variable
// We can't call the function before the initialization / declaration

const juiceFactoryArrow = (apples, oranges) => {
  const juices = (apples * oranges) / 2;
  return `${juices} juices is ready using ${apples} apples and ${oranges} oranges. 🧃`;
};

console.log(juiceFactory(10, 15));

// ACT As like ternary operator (we can write 1 line short fucntion in arrow function)

//syntex :

//type 1:
const ageCalculator = (birthYear) => 2022 - birthYear;

console.log(ageCalculator(1999));

//type 2 : Ternary Operator
const ageCalculator_ternary = (birthOfYear) =>
  2022 - birthOfYear >= 18 ? `You are Adult` : `You are kid`;

console.log(ageCalculator_ternary(1998));

//-------------------More Ternary operators---------------------//

// 1.arrow functons using
const programmerBoy = (age, skill) => {
  if (age >= 18 && skill) {
    // we can aslo write (age >= 18 && skill === true)
    return `You Can be a Programmer`;
  } else {
    return `You Can't be a Programmer`;
  }
};

console.log(programmerBoy(23, false));
console.log(programmerBoy(24, true));

// 2. arrow ternary fucntons using
const programmerBoy_Pro = (age, skill) =>
  age >= 18 && skill
    ? `You Can be a Pro Programmer`
    : `You Can't be a Pro Programmer`;

console.log(programmerBoy_Pro(24, true));

// Exercise 1
/*

## **Calculate Total Bricks of 73 floors and extra bricks in each floor after 10th floor**

**underGround = 50000 Bricks**

**1 - 10th floor = EachFLoor (10000)Bricks** 

**11th floor = 12000 Bricks**

**12 - 21th floor = EachFLoor (10000)Bricks** 

**22th floor = 12000 Bricks**

**73 floor =?**

//Math.trunc() function use to return only integer value not float`

*/

function bricksCalculation(totalFloors) {
  const underGroundBricks = 50000;
  let bricksForAllFloors = totalFloors * 10000;
  let totalBricks;

  if (totalFloors >= 11) {
    const extraFloors = Math.trunc(totalFloors / 11);
    const extraBricks = extraFloors * 2000;
    totalBricks = underGroundBricks + bricksForAllFloors + extraBricks;
    return `Total bricks needed for ${totalFloors} floors = ${totalBricks}`;
  } else {
    totalBricks = underGroundBricks + bricksForAllFloors;
    return `Total bricks needed for ${totalFloors} floors = ${totalBricks}`;
  }
  return totalBricks; // no need to return cause in if else we returned dynamic values
}
console.log(bricksCalculation(73));

// Exercise -2

// --------- Function calling Function  (Callback Function)-----------

// Function - 1
function fruitCutter(fruit) {
  return fruit * 4; // making pieces of fruit
}

//Function - 2
function juiceMaker(apples, oranges) {
  const applePieces = fruitCutter(apples); // calling function 1
  const orangePieces = fruitCutter(oranges); // calling function 1

  const juice = (applePieces + orangePieces) / 2;

  return `${juice} litter juice is ready using ${applePieces} apple pieces and ${orangePieces} orange pieces `;
}

console.log(juiceMaker(15, 10)); //calling function 2

// ------------------------------ Currying Functions ------------------------------

// in this multi_curry funciton these all are anonymous functions that carrying 1 peremeter
// anonymous functions = are those functions without name

function multi_curry(a) {
  // anonymous functions
  return function (b) {
    return function (c) {
      return function (d) {
        return function (x) {
          return function (y) {
            return a * b * c * d * x * y;
          };
        };
      };
    };
  };
}

console.log(multi_curry(10)(12)(14)(7)(20)(5)); // syntax of giving arguments in carry functions

// Lamda Function / Lamda Calculus
const multi_curryPro = (a) => (b) => (c) => (d) => (x) => (y) =>
  a * b * c * d * x * y;

console.log(multi_curry(10)(12)(14)(7)(20)(5));
