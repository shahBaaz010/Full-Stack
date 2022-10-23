//---------------------------------Tamplate literals -----------------------------

//Tamplate literals : `........${variableName}...`

const nameBabar = "Babar";
const ageBabar = 30;
const jobBabar = "programmer";
// const bioBabar =
//   "My name is " +
//   nameBabar +
//   " , i am " +
//   ageBabar +
//   " years old and myself a " +
//   jobBabar;

// Way of using Tamplate literals

const bioBabar = `My name is ${nameBabar},I am ${ageBabar} and myself a ${jobBabar}.`; // back-tick sign

console.log(bioBabar);

//multiple line using tamplate literals : ***don't need use \n for new line***

console.log(`
Hello !
Myslef 
${nameBabar}
& I
Am 
A
Programmer
`);

// ---------------------------------- Conditional Opperators -------------------------

const birthYear = 1998;
if (birthYear <= 1999 && birthYear >= 1990) {
  console.log(`Hello ! you are 90's Kid 😍`);
} else {
  console.log(`No! you're not 90's kid ☹️`);
}

// ------------------ Type convertion (manually) & coercion (automattically) --------------

// ------------------------------- Type coercion (automattically) ---------------------------
// EXP:1
const inputyear = "1999";

// string + number = string
// after STRING if there is (+) and then there is NUMBER then NUMBER will be convert into STRING
console.log(inputyear + 10); // output is : 199910

// string - number = number
// after STRING if there is (-) and then there is NUMBER then STRING will be convert into NUMBER
console.log(inputyear - 10); // output is : 1899

//EXP:2
const inputdata = "Bangladesh";

console.log(inputdata + 1971); // output is : Bangladesh1971
console.log(inputdata - 10); // output is : NaN "not a number" // string data is not in digit that's why coerction is not happening and showing NaN

//EXP:3

console.log(100 + "200"); //output is : 100200
console.log(100 - "200"); //output is : 100
console.log(100 * "200"); //output is : 200000
console.log(100 / "200"); //output is : 2
console.log(100 + "TK"); //output is : 100TK

//  ------------------ Type convertion (manually) ----------------

const testNumber = "200"; // this is a string data type

// this a sytex of type convertion manually
console.log(number(testNumber)); // output is : 200 // which is now an intiger number data type

console.log(number("50.50")); //output is : 50.50 // this was a string data type but now it converted to float number data type

console.log(number("taba")); //output is : NaN;
console.log(string(1971)); // output is : "1971" // number to string converted manually

//Exp:1
const carrentKiGese = false;
console.log(carrentKiGese, typeof carrentKiGese);

console.log(string(carrentKiGese));
console.log(carrentKiGese, typeof carrentKiGese);

// *****NaN means not a number but typeof NaN is Number why??? *******

// G A M E *********************

let a = "1" + 1;
a--;
console.log(a); // answer is :

//game : 2

let x = 2 + 3 + 4 + "5";
x += 5;
console.log(x); // answer is :

//game : 3
let y = "10" - "5" - "3" - 2 + "5";
y -= 10;
console.log(y); //answer is :

//game : 4

let b = 1 + 1 - 1 - "1" + "10" - 20;
b += "10";
b--;
console.log(b); // aswer is :
