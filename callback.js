/*🔁 Callbacks in JavaScript
A callback is a function that is passed as an argument to another function and is executed after the completion of that function.

Callbacks are commonly used for asynchronous operations, like reading files, making API calls, or handling events.*/
sum(displayConsole,1,2);
function sum(callback,x,y){
 let result  = x+y;
 callback(result);
}

function displayConsole(result){
    console.log(result);
}
function greeting(name) {
    console.log('Hello, ' + name);
  }
  
  function processUserInput(callback) {
    const name = 'Derric';
    callback(name);
  }
  
  processUserInput(greeting);
  