/*🔹 What is Destructuring in JavaScript?
Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It makes code cleaner and more readable by reducing the need for repetitive references. */

// swap the value of two variables

// 🔁 Swap the value of two variables
let a = 1;
let b = 6;
[b, a] = [a, b];
console.log(a); // 6
console.log(b); // 1

// 🔄 Swap two elements in an array
const colors = ["red", "blue", "grey", "yellow", "orange"];
[colors[4], colors[2]] = [colors[0], colors[3]];
console.log(colors); // ["red", "blue", "yellow", "grey", "red"]

// 🎯 Assign array elements to variables
const [f, s, t, fo, fi, six, ...extracolors] = colors;
console.log(f);  // "red"
console.log(s);  // "blue"
console.log(t);  // "yellow"
console.log(fo); // "grey"
console.log(fi); // "red"

// 👤 Object Destructuring
const person1 = {
    fname: "derric",
    lname: "samson",
    job: "junior dev",
    age: 20,
};
const person2 = {
    fname: "nishant",
    lname: "oueseph",
    job: "senior dev",
    age: 19,
};

const { fname, lname, job, age } = person1;
const { fname: fnam, lname: lnam, job: jo, age: ag } = person2;

function display({ fname, lname, job, age }) {
    console.log(`Name: ${fname} ${lname}`);
    console.log(`Age : ${age}`);
    console.log(`Job : ${job}`);
}

display(person2); // ✅
