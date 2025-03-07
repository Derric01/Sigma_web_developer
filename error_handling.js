let a = prompt("Enter var a ")
let b = prompt("Enter   var b")
if(isNaN(a) || isNaN(b)){
    throw  SyntaxError("THis is not allowed!!")
}
sum = parseInt(a)+parseInt(b)

try {
    console.log("This is sum",sum*r)
     //return true
} catch (error) {
    console.log("This is an error")
     return false
}
finally{
    console.log("The db is closed")
}