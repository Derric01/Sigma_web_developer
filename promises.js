console.log("This is promises!!");
let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("NO the random number did not support you!!")
    }
    setTimeout(()=>{
      console.log("I am done!!")
      resolve("DErric")
    },3000)
});
prom1.then((a)=>{
    console.log(a);
}

)
