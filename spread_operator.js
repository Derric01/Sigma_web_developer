
/*🔹 Spread Syntax (...)
The spread syntax is used to expand elements of an iterable (like arrays, strings, or objects) into individual elements. It is commonly used in function calls, array literals, and object literals.*/

let numbers = [1,2,3,4,5];
console.log(numbers)
let minnumber = Math.min(...numbers)
let maxnumber = Math.max(...numbers)
console.log(minnumber)
console.log(maxnumber)
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]
