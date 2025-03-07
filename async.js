async function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    console.log("loading modules!!");
    console.log("wait for some time");
    
    let data = await getData(); // Wait for the promise to resolve
  
    console.log("load data!!");
    console.log("process data!!", data);
  }
  
  fetchData();
  