class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    move(speed){
        console.log(`this ${this.name} can move at a speed of ${speed}`)
    }
}
class rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed = runspeed;
        
    }
    run(){
        console.log(`this ${this.name} can run!!`);
        super.move(this.runspeed);
    }
}
class fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`This ${this.name} can swim!!`);
        super.move(this.swimspeed);
    }
}

class hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed = flyspeed;
    }
    fly(){
        console.log(`${this.name} can fly high!!`);
        super.move(this.flyspeed);
    }
}

const r = new rabbit("rabbit",3,"8km/h");
const f = new fish("fish",4,'6km/h');
const h = new hawk("Hawk",10,"45km/h");

console.log(r.name);
console.log(r.age);
console.log(r.runspeed);

console.log(f.name);
console.log(f.age);
console.log(f.swimspeed);

console.log(h.name);
console.log(h.age);
console.log(h.flyspeed)
r.run()