`use strict`;

// Exercise : 1 Differntial equation

/**

index values for 2x2 : (1,-1) (2,-2)
index value for 1x1 : (3,-3)

**/

function hybridNumeric(a, b, c, d, x, y) {
  const max = (a + d) * (b + c); // we doning sum of rows
  const min = x + y;
  const def = 2 * (max - min) * max; // fomrula of defarentiation equation
  const result_def = def_finder(def); // calling def_finder function and giving argument

  function def_finder(def) {
    const dx = [1, -1]; // dx equation from digital square signal wave
    const dy = [1, 1]; // dy equation from digital square signal wave

    dx.push(def); // push func will add def value in dx[1, -1, ..] index next of -1
    dy.push(def); // push func will add def value in dy[1, 1, ..] index next of 1

    const dz = dx.concat(dy); // concat func will add TWO array dx[] , dy[] into ONE array , dz[[dx],[dy]]
    return dz;
  }
  return result_def;
}
// after cross matrix (1,-2) (-1,2)
const aA = 1;
const bB = -2;
const cC = -1;
const dD = 2;
const xX = 3;
const yY = -3;

console.log(hybridNumeric(aA, bB, cC, dD, xX, yY));

// Exercise 2 : long jump
/*

lionsClub = ( 11 , 15 , 15, 17 , 18)
dragonsClub = (16 , 14, 18, 10, 9)

conditon :
1 ) winnners must have score >= 15 
2 ) lionsClub == dragonsClub then it will be draw 


*/

const lionsClub = (11 + 15 + 15 + 17 + 18) / 5;
const dragonsClub = (16 + 14 + 18 + 10 + 9) / 5;

console.log(lionsClub);
console.log(dragonsClub);

if (lionsClub >= 15 || dragonsClub >= 15) {
  if (lionsClub >= dragonsClub) {
    console.log("Lions Wins!");
  } else if (dragonsClub >= lionsClub) {
    console.log("Dragons Wins!");
  } else {
    console.log("Drawn!");
  }
} else {
  console.log("Match Dismissed");
}

// exercise 3 : juice Maker (using call back function)

// side effect of fruite cutter = 1-1+1-1+1-1 = 0; 3Time call 3Time Return
// side effect of juiceMaker = 1-1+3 = 3; oneTime call oneTime Return & 3 time CallBack

const fruitCutter = (fruites) => fruites * 4;

const juiceMaker = (apples, bananas, oranges) => {
  const applePieces = fruitCutter(apples);
  const bananaPieces = fruitCutter(bananas);
  const orangePieces = fruitCutter(oranges);

  const juice = (applePieces + bananaPieces + orangePieces) / 3;
  return `${juice} ltr. juice Ready !`;
};

console.log(juiceMaker(10, 20, 15));
