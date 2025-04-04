/*🔸 Rest Parameter (...)
The rest parameter is used in function definitions to collect all remaining arguments into a single array. It allows functions to accept an indefinite number of arguments. */

a = "apple";
b = "mango";
c = "orange";
d = "grapes";

function openFridge(...foods){
    console.log(foods)
}
openFridge(a,b,c,d)

function myFunc(...args) {
    console.log(args);
  }
  myFunc(1, 2, 3); // [1, 2, 3]

  function sumAll(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
  }
  
  sumAll(1, 2, 3);        // 6
  sumAll(5, 10, 15, 20);  // 50

  const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
