# 📘 React State Management with useState (Objects & Arrays)

In this project, you learned how to use the `useState` hook to manage both **objects** and **arrays** in a React functional component.

---

## 🧱 1. Updating an Object in State

You created a single `car` object like:

```js
const [car, setCar] = useState({
  year: 2024,
  make: 'Ford',
  model: 'White Mustang'
});
```

To update individual properties without losing the others, you used the **spread operator (`...`)**:

```js
setCar({ ...car, year: 2025 });
```

This ensures only `year` updates while keeping `make` and `model` intact.

You also used input fields to make updates dynamic:

```jsx
<input
  type="number"
  value={car.year}
  onChange={(e) => setCar({ ...car, year: parseInt(e.target.value) || 0 })}
/>
```

---

## 📋 2. Updating an Array in State

You created an array of car objects:

```js
const [cars, setCars] = useState([
  { year: 2024, make: 'Ford', model: 'White Mustang' },
  { year: 2023, make: 'Toyota', model: 'Red Corolla' },
  // ...
]);
```

To **add** a new car:

```js
const newCar = { year: 2025, make: 'Tesla', model: 'Model Y' };
setCars([...cars, newCar]); // Adds to end of array
```

To **remove** a car by index:

```js
const handleRemove = (index) => {
  setCars(cars.filter((_, i) => i !== index));
};
```

Each car can be displayed using `.map()` and removed with a button.

---

## 💡 Why This Matters

Managing **objects** and **arrays** in state is essential for dynamic UIs — like forms, lists, tables, etc.

Learning to:
- Use the spread operator
- Update immutably
- Handle arrays with `.map()` and `.filter()`

…makes your React apps clean, efficient, and bug-free. 🚀
