// let obj ={
//     a:1,
//     b:"DErric"
// }
// console.log(obj);

// let animal ={
//     eats:true
// };
// let rabbit ={
//     jumps:true
// };

// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        name.this = name
        console.log("The object is created.......")
    }
    eats(){
        console.log("I am eating!!")
    }
    jumps(){
        console.log("jumping jumping")
    }
}
class lion extends Animal{
 
}
let l = new lion("Sherra")
let a = new Animal("Derric")
console.log(a)