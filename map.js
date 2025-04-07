// const num = [1,2,3,4,5];
// let sq = num.map(square);
// console.log(sq)
// function square(element){
//     return Math.pow(element,2);
// }
// let cubes = num.map(cube)
// console.log(cubes)
// function cube(element){
//     return Math.pow(element,3);
// }

let student = ["sponge bob","patrick","peter","david"];

function upper(element){
    return element.toUpperCase();

}
let up = student.map(upper)
console.log(up)

function lowers(element){
    return element.toLowerCase();

}
let low = student.map(lowers)
console.log(low)

// formatted dates 
const dates = ['20-09-2004','19-09-2005','6-01-2006','1-1-2001'];

function formattedDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[0]}/${parts[2]}`;
}
let format = dates.map(formattedDates);
console.log(format)