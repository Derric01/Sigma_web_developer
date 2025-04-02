const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum +1)) +minNum;
console.log(answer);

let attempt = 0;
let guess;
let running = true;
while(running){
    guess = Number(guess)
    guess = window.prompt(`Enter the guess that is number b/w ${minNum} to ${maxNum}`);

   if (isNaN(guess)){
    alert(`Please enter a valid number`);
   }
   else if(guess<minNum || guess>maxNum){
    alert(`please enter a valid number`);
   }
   else{
    if (guess<answer){
        alert(`please its too low`);
        attempt++;
    }
    else if(guess<answer){
        alert(`its too High!!`);
    }
    else{
        alert(`You have guessed the right !! in so many attempts  ${attempt}`);
        running=false;
    }
   }
}