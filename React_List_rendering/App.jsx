// import List from './List.jsx';

// function App() {
//    return( 
//    <>
//     <List></List>
//     </>
//   );

//}
import React from 'react';
import List from '../List.jsx';
import './App.css'; // make sure to include if you're using CSS

function App() {
  const fruitData = [
    // { name: 'Apple', cal: 95 }, ← removed
    { name: 'Banana', cal: 104 },
    { name: 'Cherry', cal: 77 },
    { name: 'Date', cal: 249 },
    { name: 'ElderBerry', cal: 72 },
    { name: 'Fig', cal: 78 },
    { name: 'Guava', cal: 68 }
  ];

  const vegetableData = [
    { name: 'Carrot', cal: 41 },
    { name: 'Broccoli', cal: 55 },
    { name: 'Spinach', cal: 23 },
    { name: 'Potato', cal: 77 },
    { name: 'Tomato', cal: 18 },
    { name: 'Cucumber', cal: 16 }
  ];

  return (
    <div>
      <div className="list-container">
        <h1>Fruits</h1>
        <List item={fruitData} type="Fruit" />
      </div>

      <div className="list-container">
        <h1>Vegetables</h1>
        <List item={vegetableData} type="Vegetable" />
      </div>
    </div>
  );
}

export default App;

