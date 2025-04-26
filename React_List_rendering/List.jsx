
// function List(){
// const fruit = ['Apple','Banana','Cherry','Date','ElderBerry','Fig','guava'];
// const fruit = [{name:'Apple', cal:95} ,
//     {name:'Banana',cal:104},
//     {name:'Cherry',cal:77},
//     {name:'Date',cal:249,},
//     {name:'ElderBerry',cal:72},
//     {name:'Fig',cal:78}
//     ,{name:'guava',cal:68}];

// const od = fruit.map((item,index)=>(
    
// <li key={index}>
//     {item.name}-{item.cal} calories
//     <hr></hr>
// </li>));
//   const lowcalfruits = fruit.filter((item)=>item.cal<100)

//   const od  = lowcalfruits.map((item,index)=>(
//     <li key={index}>
//          {item.name} -{item.cal}calories
//          <hr></hr>
//     </li>
//   ))


// const highcalfruits = fruit.filter((item)=>item.cal>100)

// const od  = highcalfruits.map((item,index)=>(
//   <li key={index}>
//        {item.name} -{item.cal}calories
//        <hr></hr>
//   </li>
// ))

// return (<ol>{od}</ol>)

//using props

// import React from 'react';

// function List({ item, type }) {
//   return (
//     <ol>
//       {
//         item.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.cal} cal ({type})
//             <hr />
//           </li>
//         ))
//       }
//     </ol>
//   );
// }

// export default List;


//}



import React from 'react';

function getEmoji(name, type) {
  const emojis = {
    Fruit: {
      Apple: '🍎',
      Banana: '🍌',
      Cherry: '🍒',
      Date: '🌴',
      ElderBerry: '🫐',
      Fig: '🍈',
      Guava: '🥭',
    },
    Vegetable: {
      Carrot: '🥕',
      Broccoli: '🥦',
      Spinach: '🪴',
      Potato: '🥔',
      Tomato: '🍅',
      Cucumber: '🥒',
    }
  };

  return emojis[type][name] || '🍽️'; // default fallback emoji
}

function List({ item, type }) {
  return (
    <ol>
      {item.map((item, index) => (
        <li key={index}>
          <span>{getEmoji(item.name, type)} </span>
          {item.name} - {item.cal} cal ({type})
        </li>
      ))}
    </ol>
  );
}

export default List;


