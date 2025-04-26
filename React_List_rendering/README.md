# 📜 React List Rendering Example

This is an **example of list rendering** in React, where we dynamically display a list of **fruits and vegetables** along with their calorie values using **React props**, **list rendering**, and **basic styling**. 🌱🍇

---

## 🔑 Key Concepts Covered

1. **List Rendering**:
   - Using `.map()` to loop through arrays and display items in the UI.
   
2. **Props**:
   - Passing data between components (`App.jsx` to `List.jsx`) using **props**.

3. **Emojis**:
   - Dynamically assigning emojis to each list item based on its category (fruit or vegetable).

4. **CSS Styling**:
   - Creating a clean, responsive layout using basic CSS.

---

## 🗂️ File Structure

```
📦 src/
├── 📄 App.jsx           // Main app file where we pass data (fruitData & vegetableData) to List component
├── 📄 List.jsx          // Component responsible for rendering items passed via props
├── 📄 index.css           // Custom styles for the app layout and list items
```

---

## 📋 Example Code

Here is an example of how list rendering is handled in React:

### App.jsx

- Renders the `List` component twice with two sets of data: one for fruits and one for vegetables.

### List.jsx

- A reusable component that takes `item` (data array) and `type` (fruit or vegetable) as **props** and renders each item with a corresponding emoji.

---

## 🎨 Styling

Basic CSS applied for a simple, modern design.

---

## 🎉 Final Thoughts

This project helped me understand **list rendering** in React and how to pass data between components using **props**. It also showed me how to dynamically display content and use emojis for fun visual enhancements. 

