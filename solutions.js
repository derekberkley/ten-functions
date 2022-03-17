"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// "Ten Functions" Exercise #1 -----
//1. Define the function isTrue
//2. Create parameter for "any Input"
//3. Use ternary (if/else) statement to test parameter to see if === to boolean true
//4. Return (boolean) true if input is exactly equal in value and data type to (boolean) true
//5. Return false in else statement for all values not === to (boolean) true
//6. Simplified into ternary in return statement.

function isTrue(anyInput) {
    return (anyInput === true);
}

// "Ten Functions" Exercise #2 -----
//1. Define a function named isFalse
//2. Define a parameter for any value
//3. Use ternary (if/else) statement to test parameter to see if the value is === to boolean FALSE
//4. Return (boolean) true if input is exactly equal in value and data type to (boolean) false
//5. Return false in else statement for all values not === to (boolean) false
//6. Simplified into ternary in return statement.

function isFalse(anyValue) {
    return (anyValue === false);
}

// "Ten Functions" Exercise #3 -----
//1. Define a function named not
//2. Define a parameter for any input
//3. Returns the boolean opposite of the provided input using NOT operator

function not(borat) {
    return !borat;
}

// "Ten Functions" Exercise #4 -----
// Define a function named addOne that takes in a single input. If the input is a number or a
// numeric string, return the value plus one.
// 1. Define function addOne
// 2. Add parameter singleInput
// 3. Ensure input is converted to a number (in case it's a string)
// 4. Add one to the number
// 5. Return result of adding one to the number and simplifying the return statement.

function addOne(singleInput) {
    var strToNum = Number(singleInput);
    return strToNum += 1;
}

// "Ten Functions" Exercise #5 -----
// Define a function named isEven that takes in a single input. If the input is an even number
// or a string containing an even number, return true. Any other input should return false for the output.
// 1. Define the function isEven
// 2. Add in parameter for single input
// 3. use Number() to ensure input is an actual number and store in new var
// 4. use modulus to determine if number is even (has remainder of 0)
// 5. return simplified ternary statement for true if even and false if not even

function isEven(snglInpt) {
        return ((Number(snglInpt)) % 2 === 0);
}

// if (typeof snglInpt === 'number'){
//     return (snglInpt % 2 == 0);
// } else if (typeof snglInpt === "string") {
//     var newNum = Number(snglInpt);
//     return true;
// } else {
//     return false;
// }
// }

// "Ten Functions" Exercise #6 -----
// Define a function named isIdentical that takes in two input arguments. If each input is equal both
// in data type and in value, then return true. If the values are not the same data type or not the
// same value, return false.
// 1. Define the function isEven
// 2. Add in parameters for two inputs
// 3. Compare both inputs for type and value using ===
// 4. return true using simplified ternary statement if inputs are equal and false if not equal (in type and value)

function isIdentical(inp1, inp2) {
    return (inp1 === inp2);
}

// "Ten Functions" Exercise #7 -----
// Define a function named isEqual that takes in two input arguments. If each argument is equal only
// in value, then return true. Otherwise return false.

function isEqual(param1, param2) {
    return (param1 == param2);
}

// "Ten Functions" Exercise #8 -----
// Define a function named or that takes in two input arguments. The output returned should be the
// result of an or operation on both inputs.

function or(arg1, arg2) {
    return (arg1 || arg2);
}

// "Ten Functions" Exercise #9 -----
// Define a function named and that takes in two input arguments and returns the result of a logical
// and operation of both inputs.

function and(thing1, thing2) {
    return (thing1 && thing2);
}

// "Ten Functions" Exercise #10 -----
// Define a function named concat that takes in two input arguments. If both arguments are strings, then
// return the concatenated result. If two numbers are provided, then return the string concatenation of
// each set of numerals.

function concat(almost, done) {
    return String(almost) + String(done);
}

















