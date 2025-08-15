// Implicit conversion (Type coercion) → JavaScript does it automatically.

// Number + String → String
console.log(5 + "2"); // "52" (number converted to string)

// String - Number → Number
console.log("10" - 2); // 8 (string converted to number)

// Boolean + Number → Number
console.log(true + 1); // 2 (true becomes 1)

// Boolean in string context
console.log("Value: " + false); // "Value: false"

// Null and Undefined in math
console.log(null + 5); // 5 (null becomes 0)
console.log(undefined + 5); // NaN (undefined becomes NaN)
console.log("")



// Explicit conversion → You do it manually using functions/methods.

// -------- To String --------
let num = 123;
let numToStr = String(num);
console.log(numToStr);
console.log(typeof numToStr);
console.log("");
//-----------------------------------

let numb = 123;
console.log(String(num));   // "123"
console.log(num.toString()); // "123"
console.log(typeof String(num)); // string
console.log("");

let str = "456";
console.log(Number(str));   // 456
console.log("");

console.log(Number("3abc")); // NaN

console.log(parseInt("42abc"));   // 42
/* parseInt() reads the string from left to right.
It stops reading as soon as it finds a character that’s not part of a valid integer.
In "42px", the digits "42" are valid, but "px" is not a number
*/
console.log("");

console.log(parseFloat("3.14")); // 3.14
console.log(+str); // 456 (unary plus)
console.log("");


console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true
console.log("");

console.log(Number(""));    // 0
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(String(null));  // "null"
console.log(String(undefined)); // "undefined"
console.log("");


