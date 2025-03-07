console.log("Hey this is derric!!")
console.log("This will get better!!!! ")
setTimeout(()=>{
    console.log("Hey i am inside set timeout")
},0);
setTimeout(()=>{
    console.log("Hey i am inside set interval")
},0);
console.log("THe end !!");
const callback =(arg)=>{
    console.log(arg)
}
const loadscript =(src,callback)=>{
   let sc= document.createElement("script")
   sc.src =src;
   sc.onload = callback("Derric")
   document.head.append(sc)
}


loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)