# Card Components in React

This folder contains reusable **Card Components** for displaying content in a visually appealing way. The Card component can be used to display a variety of content such as images, text, and buttons. It is designed to be flexible and easy to use in different parts of your application.

## Table of Contents
- [Overview](#overview)
- [Usage](#usage)
- [Card Component Structure](#card-component-structure)
- [Styling the Card Component](#styling-the-card-component)
- [Customization](#customization)

## Overview

The **Card** component is a container that holds different types of content such as text, images, or buttons. It is a versatile component commonly used for displaying products, user profiles, or any content that needs to be grouped together in a distinct visual element.

### Example of Card Component

```jsx
import Card from './Card';

function App() {
  return (
    <div className="app">
      <Card 
        title="Card Title" 
        description="This is a simple card component."
        imageUrl="https://example.com/image.jpg"
        buttonText="Learn More"
      />
    </div>
  );
}
```

## Usage

To use the **Card** component in your React project, follow these steps:

1. **Import the Card Component:**

   Import the Card component wherever you want to use it.

   ```jsx
   import Card from './Card';  // adjust the path as needed
   ```

2. **Use the Card Component:**

   The Card component accepts several props to customize the content:

   - `title` (string) – The title of the card.
   - `description` (string) – A short description or content for the card.
   - `imageUrl` (string) – The URL for an image to display on the card (optional).
   - `buttonText` (string) – Text for the button (optional).
   - `onButtonClick` (function) – A function that runs when the button is clicked (optional).

   Example:

   ```jsx
   <Card 
     title="Product Title" 
     description="This is a description of the product."
     imageUrl="https://example.com/product.jpg"
     buttonText="Buy Now"
     onButtonClick={() => console.log("Button clicked!")}
   />
   ```

## Card Component Structure

The `Card` component is composed of the following sections:

1. **Title** – Displays the title of the card (e.g., product name).
2. **Image** – Optionally displays an image at the top of the card (e.g., product image).
3. **Description** – Displays a short description of the content.
4. **Button** – An optional button for additional actions, such as a link to more information or a purchase button.

### Example Card Component:

```jsx
function Card({ title, description, imageUrl, buttonText, onButtonClick }) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-img" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      {buttonText && <button className="card-btn" onClick={onButtonClick}>{buttonText}</button>}
    </div>
  );
}

export default Card;
```

## Styling the Card Component

The Card component can be styled using either external CSS, inline styles, or CSS Modules. Below is an example of how to style the Card component using a **CSS file**.

### Example Styling (`Card.css`):

```css
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
  margin: 20px;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 12px 0;
}

.card-description {
  font-size: 1rem;
  color: #555;
}

.card-btn {
  background-color: #4f46e5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card-btn:hover {
  background-color: #4338ca;
}
```

### Importing the Styles:

Make sure to import the `Card.css` file in your `Card.jsx`:

```jsx
import './Card.css';  // adjust the path as needed
```

## Customization

You can easily customize the `Card` component by modifying its props and styling:

1. **Props** – Add additional props to modify the card content, such as `subtitle`, `link`, or `extraInfo`.
2. **Styling** – Customize the styles by overriding the default class names or passing custom styles via inline props.

### Example Customization:

```jsx
<Card 
  title="Custom Card Title"
  description="You can customize the Card easily."
  buttonText="Click Here"
  onButtonClick={() => alert('Card Button Clicked!')}
/>
```

---

### Conclusion

The **Card** component is a versatile, reusable UI element for displaying grouped content. By using props for customization and simple CSS for styling, you can easily adapt the Card component for various use cases throughout your application.

This approach promotes clean and modular code, allowing you to reuse the Card component in different places without repetition.
