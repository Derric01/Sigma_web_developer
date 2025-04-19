const Mybox = document.getElementById("Mybox");
const mybutton = document.getElementById("mybutton");

// Single click
function changeColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Ouch! 😱";
    console.log("Box clicked");
}

// Double click
function resetBox(event) {
    Mybox.style.backgroundColor = "lightgreen";
    Mybox.textContent = "click me 😀";
    console.log("Box reset");
}

// Mouse enter
function handleMouseEnter(event) {
    event.target.style.borderColor = "orange";
    event.target.style.cursor = "pointer";
    console.log("Mouse entered the box");
}

// Mouse leave
function handleMouseLeave(event) {
    event.target.style.borderColor = "blue";
    event.target.style.cursor = "default";
    console.log("Mouse left the box");
}

// Add event listeners
Mybox.addEventListener('click', changeColor);
Mybox.addEventListener('dblclick', resetBox);
Mybox.addEventListener('mouseenter', handleMouseEnter);
Mybox.addEventListener('mouseleave', handleMouseLeave);

// Button event to reset
mybutton.addEventListener('click', () => {
    resetBox();
});
