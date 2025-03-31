const mybutton = document.getElementById('my-btn');
const label1 = document.getElementById('mylabel');
const label2 = document.getElementById('mylabe2');
const label3 = document.getElementById('mylabe3');

const min = 1;
const max = 6;

mybutton.onclick = function() {
    let randomNum1 = Math.floor(Math.random() * max) + min;
    let randomNum2 = Math.floor(Math.random() * max) + min;
    let randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
};
