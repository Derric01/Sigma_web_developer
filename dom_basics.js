// === DOM Basics Demo ===

// 1. Selecting Elements
const title = document.getElementById("main-title");
const allButtons = document.querySelectorAll("button");
const firstParagraph = document.querySelector(".intro");

// 2. Manipulating Content
title.textContent = "Updated Title using JS!";
firstParagraph.innerHTML = "<strong>This is bolded now!</strong>";

// 3. Changing Styles
title.style.color = "crimson";
firstParagraph.style.backgroundColor = "#f0f0f0";

// Using classList
firstParagraph.classList.add("highlight");
firstParagraph.classList.toggle("highlight");

// 4. Events
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`You clicked: ${btn.textContent}`);
  });
});

// 5. Creating & Removing Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv);

setTimeout(() => {
  newDiv.remove(); // Removes after 3 seconds
}, 3000);

// 6. Traversing DOM
if (firstParagraph.parentElement) {
  console.log("Parent:", firstParagraph.parentElement.tagName);
}

// 7. Form Handling
const inputField = document.querySelector("input");
const showValueButton = document.querySelector("#show-input");

if (inputField && showValueButton) {
  showValueButton.addEventListener("click", () => {
    alert(`Input value: ${inputField.value}`);
  });
}

// 8. Attribute Handling
const link = document.querySelector("a");
if (link) {
  console.log("Old href:", link.getAttribute("href"));
  link.setAttribute("href", "https://example.com");
}

// 9. documentFragment (for performance)
const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `List item ${i}`;
  fragment.appendChild(li);
}
ul.appendChild(fragment);
