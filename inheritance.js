/*Inheritance in JavaScript
Inheritance in JavaScript allows one class (called a subclass or child class) to acquire the properties and methods of another class (called a superclass or parent class). This helps in code reuse and creating a hierarchy between objects.

In modern JavaScript (ES6 and later), inheritance is implemented using the class syntax along with the extends keyword.*/ 

class Animal{
    alive = true ;
    eat(){
        console.log(`This ${this.name} is eating!!`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class eagle extends Animal{
    name = "eagle";
    fly(){
        console.log(`This eagle can fly high`);
    }
}
class goat extends Animal{
    name = "goat";
    run(){
        console.log(`This goat can run!!`);
    }
    ru
}
class hawk extends Animal{
    name = "hawk";
    fly(){
        console.log("I can fly")
    }
}

const e = new eagle();
const g = new goat();
const h = new hawk();

console.log(e.alive);
console.log(g.alive);
console.log(h.alive);

e.eat();
g.eat();
h.eat();

e.sleep();
g.sleep();
h.sleep();
h.fly()