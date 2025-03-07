let button = document.getElementById("btn")

button.addEventListener("click",()=>{
    // 
    document.querySelector(".box").innerHTML =
    "<b>You were clicked yaya</b> Enjoy the game"
    
})
button.addEventListener("contextmenu",()=>{
    // 
    // 
    alert("Don't hack us by right click please")
    
})
button.addEventListener("keydown",()=>{
    // 
    // 
    alert("I am hacked!!")
    
})