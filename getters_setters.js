/*🔑 What are Getters and Setters?
Getter (get): Allows you to access a property like it's a variable, but behind the scenes, it's calling a method.

Setter (set): Allows you to set a property like it's a variable, while running a method behind the scenes.

This helps in:

Validation

Logging

Making computed properties

Hiding internal structure (encapsulation)

*/

class rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    // Setter for width
    set w(newwidth) {
        if (newwidth > 0) {
            this._w = newwidth;
        } else {
            console.error("You must enter a value more than zero!!");
        }
    }

    // Setter for height
    set h(newh) {
        if (newh > 0) {
            this._h = newh;
        } else {
            console.error("You must enter a higher value!!");
        }
    }

    // Getter for width
    get w() {
        return this._w;
    }

    // Getter for height
    get h() {
        return this._h;
    }
    get area(){
        return this._h* this._w;
    }
}

const rec = new rectangle(245, 1234);
console.log(rec.w); 
console.log(rec.h); 
console.log(rec.area);


class person{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    set fname(xname){
        if(typeof xname ==="string" && xname.length>0){
            this._fname = xname;
        }else{
            console.error("Enter name properly!!");
        }
    }
    set lname(yname){
        if(typeof yname ==="string" && yname.length>0){
            this._lname = yname;
        }else{
            console.error("please enter proper last name");
        }
    }
    set age(gage){
        if(typeof gage==="number" && gage>=0){
            this._age = gage;
        }else{
            console.error("please enter a right age");
        }
    }

    get fname(){
        return this._fname;
    }
    get lname(){
        return this._lname;
    }


    get age(){
      return this._age;
}

    
}


const p = new person("","",-2);
const q = new person("Derric","Samson",20);
console.log(q.fname);
console.log(q.lname);
console.log(q.age);

const r  =new  person("click","rat",15);
console.log(r.fname);
console.log(r.lname);
console.log(r.age);
