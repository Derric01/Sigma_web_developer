/* In JavaScript, nested objects are objects that contain other objects as values of their properties. This allows for more complex data structures and hierarchical organization of information.
const person ={
    fullname :"spogee bar",
    age:20,
    istudent:true,
    hobbies:["karate","jelly fishing","cooking"],
    address:{
        street:"wrestle mania",
        city:"terrace",
        country:"Fantasy"

    }
}
console.log(person.fullname);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address);*/


class Person{
    constructor(name,age,...address){
        this.age = age;
        this.name = name;
        this.address = new Address(...address);
    }
}

class Address{
     constructor(street,city,country){
      this.street = street;
      this.city = city;
      this.country = country;
     }
}

const person1 = new  Person("Derric",30,"8th cross","ramamurthy nagar","church street");
const person2 = new  Person("patrick bet david",49,"7th cross","shanthi nagar","bermuda falls");

console.log(person1.address);