/*
🔢 Sorting in JavaScript
In JavaScript, sorting is commonly done using the .sort() method, which is available on arrays. */


num=[12,6,7,8,545,98]
console.log(num.sort((a,b)=>a-b))//ascending order
console.log(num.sort((a,b)=>b-a))//descending order

const people = [{name:"derric" ,age:20,gpa:8.15 },{name:"jack" ,age:19,gpa:7.15},{name:"teja" ,age:18,gpa:9.12},{name:"kishan" ,age:20,gpa:9.15}]

console.log(people.sort((a,b)=>a.gpa -b.gpa))//ascending
console.log(people.sort((a,b)=>b.gpa -a.gpa))//descending
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
