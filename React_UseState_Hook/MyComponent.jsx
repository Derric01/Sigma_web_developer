
import React, { useState } from 'react';
function MyComponent(){
  const [name, setName] = useState('guest');
  const [age,setAge] = useState(0);
  const[isEmployed,setIsEmployed] = useState(false);
  
  const ToggleEmployeeStatus =()=>{
    setIsEmployed(!isEmployed)
  }

  const nameUpdate =()=>{
    // name = 'Sponge bob';
    // console.log(name);
    setName('sponge bob')
  }

  const increment =()=>{
   setAge(age+1);
  }
  return (
    <div>
        <p>Name:{name}</p>
        <button onClick={nameUpdate}>setName</button>

        <p>Age:{age}</p>
        <button onClick={increment}>increment</button>

        <p>isEmployed:{isEmployed? "Yes":"No"}</p>
        <button onClick={ToggleEmployeeStatus}>change employee status</button>
    </div>
  )
}

export default MyComponent;