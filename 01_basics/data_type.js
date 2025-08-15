// --------------------
// PRIMITIVE DATA TYPES
// --------------------

// 1. string
let str = "Hello";
console.log(str);
console.log(typeof str);
console.log(""); // space

// 2. integer
let num = 42;
console.log(num);
console.log(typeof num);
console.log(""); // space

// 3. BigInt
let myBigInt = 123456789012345678901234567890n;
console.log("BigInt:", myBigInt, "| Type:", typeof myBigInt);
console.log(""); // space

// 4. Boolean
let isJavaScriptFun = true;
console.log("Boolean:", isJavaScriptFun, "| Type:", typeof isJavaScriptFun);
console.log(""); // space

// 5. Undefined
let notAssigned;
console.log("Undefined:", notAssigned, "| Type:", typeof notAssigned);
console.log(""); // space

// 6. Null
let emptyValue = null;
console.log("Null:", emptyValue, "| Type:", typeof emptyValue); // historical quirk: "object"
console.log(""); // space

// 7. Symbol
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId, "| Type:", typeof uniqueId);
console.log(""); // space


// -------------------------
// NON-PRIMITIVE DATA TYPES
// -------------------------

// 1. Object
let person = { name: "Alice", age: 25 };
console.log("Object:", person, "| Type:", typeof person);
console.log(""); // space

// 2. Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers, "| Type:", typeof numbers); // arrays are objects
console.log(""); // space

// 3. Function
function greet(name) {
  return "Hello, " + name;
}
console.log("Function output:", greet("Bob"), "| Type:", typeof greet);
console.log(""); // space

// 4. Date
let currentDate = new Date();
console.log("Date:", currentDate, "| Type:", typeof currentDate); // "object"
console.log(""); // space

// 5. RegExp
let pattern = /javascript/i;
console.log("RegExp:", pattern, "| Test:", pattern.test("I love JavaScript"));
console.log("Type:", typeof pattern);
console.log(""); // space

