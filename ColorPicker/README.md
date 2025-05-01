# Color Change with `onChange` and `useState` in React 🎨

This React app demonstrates how to change the background color dynamically using `useState` and `onChange`! 🎉

## 🚀 Features:
- **Dynamic Color Change**: Input a color name or hex code to change the background color in real-time! 🖌️
- **User Interaction**: The color updates instantly as you type. ⚡

## 🛠️ Setup:
1. Clone the repo or create a new React app.
2. Run `npm install` to install dependencies (if any).
3. Run `npm start` and see it live!

## 📄 Code Example:
```jsx
import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('#ffffff'); // Default white

  const handleChange = (event) => setColor(event.target.value); // Update color

  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input 
        type="text" 
        value={color} 
        onChange={handleChange} 
        placeholder="Enter color or hex" 
        style={{ padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
}

export default ColorChanger;
