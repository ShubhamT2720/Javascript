let a = 10, b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation → 1000 (10³)
console.log("");


// Assignment Operator

let x = 5;
x += 3;  // x = x + 3 → 8
x -= 2;  // x = x - 2 → 6
x *= 2;  // x = x * 2 → 12
x /= 3;  // x = x / 3 → 4
x %= 3;  // x = x % 3 → 1
x **= 2; // x = x ** 2 → 1
console.log(x);
console.log("");


// Comparison Operator

console.log(5 == "5");   // true  (loose equality, type conversion allowed)
console.log(5 === "5");  // false (strict equality, type must match)

console.log(5 != "5");   // false

/*   != → Loose inequality
     Compares values only, not types.
     If the types are different, JavaScript converts one type to match the other (type coercion) before comparison.
     "5" (string) is converted to 5 (number), then compared with 5. 
*/

console.log(5 !== "5");  // true

/*        !== → Strict inequality
          Compares both value and type.
          If either the value or type is different, it returns true.
          Here:
              First operand → 5 (number)
              Second operand → "5" (string)
              Types are different → result is true 
*/

console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 10);    // true

/* For comparison operators (>, <, >=, <=), JavaScript does convert null to a number
*/

console.log("3" > 5); //false --->For comparison (>), JavaScript converts the string to a number

//console.log("3" = 5); //  Syntax Error ----> = is the assignment operator, not a comparison

console.log("3" == 3); // true ----> == does loose equality (type coercion allowed), hence 3==3 is true

console.log("3" === 3); //false -----> === is strict equality — no type conversion, hence no comparison between string and number

console.log("3" >= 5); // false for >=, JavaScript converts "3" → 3 (number), hence 3>=5 is false


console.log(null == 0); // false ----->   == (loose equality) does not convert null to a number when comparing to a number
/* In loose equality:
   null is only equal to undefined (and itself), not to any number.
 */

console.log(null > 0); // false ----> For comparison operators (>, <, >=, <=), JavaScript does convert null to a number 0

console.log(null >= 0); // true ----> For 0>=0 is true



