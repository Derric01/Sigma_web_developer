// async function greet(){
//     return "hello world";
// }

// greet().then(msg=>console.log(msg)); 

// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }

// async function fetchUserData(userid){
//     console.log("Fetching user data...");

//     await delay(2000);
//     console.log(`user ${userid} data is fetched !!`);

//     return{id:userid,name:"Derric Samson",age:20}
// }


// async function main(){
//     try{
//         const userdata = await fetchUserData(1);
//         console.log(userdata);

//     }catch(error){
//         console.log("An error has occurred");
//     }
// }

// main();

// Simulates a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Simulated async "API" function
  async function fetchUserData() {
    const status = document.getElementById('status');
    const result = document.getElementById('result');
  
    try {
      status.textContent = "⏳ Fetching user data...";
      result.classList.add("hidden");
  
      await delay(2000); // simulate API delay
  
      const user = {
        id: 1,
        name: "Derric Samson",
        age: 20
      };
  
      status.textContent = "✅ User data fetched successfully!";
      result.innerHTML = `
        <strong>ID:</strong> ${user.id} <br />
        <strong>Name:</strong> ${user.name} <br />
        <strong>Age:</strong> ${user.age}
      `;
      result.classList.remove("hidden");
    } catch (error) {
      status.textContent = "❌ Failed to fetch user data.";
      result.classList.add("hidden");
    }
  }
  
  // Button click handler
  document.getElementById('fetch-btn').addEventListener('click', fetchUserData);
  