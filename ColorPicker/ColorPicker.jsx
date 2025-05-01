import React, { useState } from "react";
 // Import the CSS file

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  function handleColorChange(event) {
    setColor(event.target.value);
    setCopied(false);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(color);
    setCopied(true);
  }

  function resetColor() {
    setColor("#ffffff");
    setCopied(false);
  }

  return (
    <div className="color-picker-container">
      <div className="color-picker-card">
        <h1>🎨 Color Picker</h1>
        <div className="color-circle" style={{ backgroundColor: color }}></div>
        <p>
          Selected Color: <span className="hex">{color}</span>
        </p>

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="color-input"
        />

        <div className="buttons">
          <button onClick={copyToClipboard}>
            {copied ? "✅ Copied!" : "Copy Hex"}
          </button>
          <button onClick={resetColor} className="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
