import React, { useState } from 'react';
 // Link your CSS file here

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("standard");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  const validateForm = () => {
    if (name.trim() === "" || payment === "") {
      setFormError("Please fill in all required fields.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName("Guest");
    setQuantity(1);
    setComment("");
    setPayment("");
    setShipping("standard");
    setIsSubmitted(false);
  };

  return (
    <div className="page-background">
      <div className="form-container">
        <h2 className="form-title">Order Form</h2>

        {isSubmitted ? (
          <div className="success-message">
            <h3>Thank you, {name}!</h3>
            <p>Your order has been placed successfully.</p>
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            {formError && <div className="error-message">{formError}</div>}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="form-input"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                className="form-input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Delivery Instructions</label>
              <textarea
                id="comment"
                className="form-textarea"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter delivery instructions"
              />
            </div>

            <div className="form-group">
              <label htmlFor="payment">Payment Method</label>
              <select
                id="payment"
                className="form-input"
                value={payment}
                onChange={handlePaymentChange}
                required
              >
                <option value="">Select Payment</option>
                <option value="credit">Credit Card</option>
                <option value="visa">Visa</option>
                <option value="master">MasterCard</option>
                <option value="giftcard">Gift Card</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="shipping">Shipping Method</label>
              <select
                id="shipping"
                className="form-input"
                value={shipping}
                onChange={handleShippingChange}
              >
                <option value="standard">Standard</option>
                <option value="express">Express</option>
              </select>
            </div>

            <div className="button-group">
              <button type="submit" className="submit-button">Submit</button>
              <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
            </div>
          </form>
        )}

        <div className="order-summary">
          <h3>Order Summary:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Comment:</strong> {comment}</p>
          <p><strong>Payment Method:</strong> {payment}</p>
          <p><strong>Shipping Method:</strong> {shipping}</p>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
