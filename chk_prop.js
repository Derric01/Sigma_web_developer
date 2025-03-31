const mycheckbox = document.getElementById('mycheckbox');
const myVisaBtn = document.getElementById('myvisabtn');
const paypalbtn = document.getElementById('paypalbtn');
const mastercardbtn = document.getElementById('mastercardbtn');
const mysubmit = document.getElementById('mysubmit');
const SubResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        SubResult.textContent = `You are subscribed to our service`;
    }else{
        SubResult.textContent = `You are Not subscribed to our service`;
    }
}
myVisaBtn.onclick = function(){
    if(myVisaBtn.checked){
    paymentResult.textContent =`You successfully paid it through visa card`;
    }
}
paypalbtn.onclick = function(){
    if(paypalbtn.checked){
        paymentResult.textContent =`You successfully paid it with pay pal`;
    }
}

mastercardbtn.onclick = function(){
    if(mastercardbtn.checked){
        paymentResult.textContent =`the payment was made with master card` ; }
}
