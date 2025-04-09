const person1 ={
    name:"Spongebob",
    favfood:"crabby",
    sayHello:function(){
        console.log(`Hi I am ${this.name}`)},
    eat:function(){console.log(`I like to eat ${this.favfood}`)}
    
    }


    const person2 ={
        name:"peter pan",
        favfood:"burgers",
        sayHello:function(){
            console.log(`Hi I am ${this.name}`)},
        eat:function(){console.log(`I like to eat ${this.favfood}`)}
        
        }

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
// this does not work with arrow function