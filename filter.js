// let nums = [1,2,4,5,67,56,78]


// function iseven(element){
//     return element%2==0;
// }
// let eve = nums.filter(iseven);
// console.log(eve);
// function isodd(element){
//     return element%2!=0;
// }
// let odd = nums.filter(isodd);
// console.log(odd);

// const age = [14,19,23,26,12,12,13,15,16,17,18];

// function isadult(element){
//     return element>=18;
// }
// let eligible = age.filter(isadult)
// console.log(eligible);



// function isadult(element){
//     return element < 18;
// }
// let notele= age.filter(isadult)
// console.log(notele);


const fruits = ["apple","mango","cherry","grapes"]

function getshort(element){
    return element.length <7;
}
let shorty = fruits.filter(getshort);
console.log(shorty)