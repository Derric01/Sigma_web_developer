import React from 'react' ;
function Button(){
    //let count =0;
    // const handleclick =(name)=>{
    //     if(count <3){
    //         console.log(`${name}Ouch!! you Clicked mee ${count} Times\n`);
    //         count++;
    //     }
    //     else{
    //         console.log(`${name}Hey you have been clicking from a more than 3 times that is ${count} times`);
    //         count++;
    //     }

    // }
   //const handleclick2 =(name)=>console.log(`Ouch!! you Clicked me ${name}`)
   const handleclick =(e)=>{console.log(e)}
    return(
        <>
        <button onClick={(e)=> handleclick(e)}> Click me 😉</button>
        </>
    )
}

export default Button;