const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count =0;
    countlabel.textContent = count;
}