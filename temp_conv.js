const textBox = document.getElementById('textBox');
const Tofaren = document.getElementById('Tofaren');
const Tocel = document.getElementById('Tocel');
const result = document.getElementById('result');

let temp;

function convert(){
    if(Tofaren.checked){
        temp = Number(textBox.value);
        temp = temp*9/5+32;
        result.textContent = `${temp}°F `

    }
    else if(Tocel.checked){
        temp = Number(textBox.value);
        temp = temp*5/9-32;
        result.textContent = `${temp}°C `

    }
    else{
        result.textContent=`Select a unit!!`;
    }
}
