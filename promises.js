// console.log("This is promises!!");
// let prom1 = new Promise((resolve,reject)=>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("NO the random number did not support you!!")
//     }
//     setTimeout(()=>{
//       console.log("I am done!!")
//       resolve("DErric")
//     },3000)
// });
// prom1.then((a)=>{
//     console.log(a);
// }

// )
function walkDog() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("You walk the Dog 🐶");
        resolve(); // Call resolve to indicate the task is complete
      }, 1500);
    });
  }
  
  function cleanKitchen() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("You clean the kitchen 🍽️");
        resolve(); // Call resolve to indicate the task is complete
      }, 2500);
    });
  }
  
  function takeoutthetrash() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("You take out the trash 🗑️");
        resolve(); // Call resolve to indicate the task is complete
      }, 500);
    });
  }
  
  // Chaining the promises to execute tasks sequentially
  walkDog()
    .then(() => cleanKitchen())
    .then(() => takeoutthetrash())
    .then(() => {
      console.log("You have completed all the tasks! 🎉");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  

//   walkDog(()=>{
//     cleanKitchen(()=>{
//         takeoutthetrash(()=>{
//             console.log("You have completed all the tasks! 🎉");
//         });
//     });
//     });
    