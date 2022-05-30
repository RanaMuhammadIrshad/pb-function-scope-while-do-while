"use strict";
/* * Write a function that accepts two numbers and validate that they are numbers.  */


function printExpVals (num1, num2) {
  if ((typeof num1 !=='number')||(typeof num2 !== 'number')) {
    console.log('Please use number');
  }

  let expResult = 1;
  let values = '';

  for (let i = 0; i<num2; i++) {
    expResult *= num1;
    values += `${expResult}`
  }

  console.log(values);
}

printExpVals (2)

// function numMessage(num1, num2) {
//   if (num1 === undefined) {
//     num1 = `The num1 (${num1}) is NOT NUMBER, add some NUMBER`;
//   } else {
//     num1 = `The num1 (${num1}) is NUMBER`;
//   }
//   console.log(num1);
//   if (num2 === undefined) {
//     num2 = `The num2 (${num2}) is NOT NUMBER, add some NUMBER`;
//   } else {
//     num2 = `The num2 (${num2}) is NUMBER`;
//   }

//   console.log(num2);
// }
// /* Different cases */
// numMessage(2, 3);
// numMessage();
// numMessage(2);
console.log(`-----------------`);

/* After that, the function should print _y_ exponential values starting from _x_.
 */

/* * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
 * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2. */

function expo(x, y) {
  for (let i = 1; i <= y; i++) {
    let result = x ** i;
    console.log(result);
  }
  console.log(`-----------------`);
}
/* Different cases */
expo(3, 5);
expo(2, 8);
expo(10, 5);

/* 
  #### 2. Fruits
  * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".  */

let favFruit = "Mango";

function printFavoriteFruit() {
  favFruit = "Mango";
  console.log(`My favorite fruit is: ${favFruit}`);
}

printFavoriteFruit();
console.log(`-----------------`);

/* #### 3. Multiply a Number by Itself
 * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
 * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file. */

function exponent(num1, num2) {
  for (let i = 1; i <= num2; i++) {

    let result = Math.pow(num1, i);
    console.log(`${num1} ^ ${i} is ${result}`);
    // let result = 0;
    // result = num1 ** i;
    // console.log(result);
  }
  /* console.log(result); */ // here result is outside of the the block which is FOR-loop block- if we try to access result outside of FOR-lop block. it is not accessible
}

exponent(2, 5);

//////////////////

/* ## 1. Run Along
Create a `while` loop that runs as long as the variable `i` is less than 15. Print `i`. */
let i = 0;
while (i < 15) {
  console.log(`1. Run Along: ${i}`);
  i++;
}

/* ## 2. Add it up 
Create a `while` loop which sums up numbers from 1-20. */

let j = 1;
let sum = 0;

while (j <= 20) {
  sum += j;
  /*   console.log(`Sum : ${sum}`);  */
  j++;
}
console.log(`2. Add it up : ${sum}`);

/* ## 3. Do this while i...
Use a `do`, `while` loop to print `The number is [i]` while i is less than 20. 
 */

let k = 1;

do {
  console.log(`3. The number is: ${k}`);
  k++;
} while (k < 20);
