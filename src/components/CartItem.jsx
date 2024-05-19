import React from 'react';

// CartItem component displays an item in the shopping cart
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  
  // Handle incrementing the quantity of the item
  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  // Handle decrementing the quantity of the item
  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  // Handle changing the quantity of the item via input field
  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      {/* Display item image */}
      <img src={item.image} alt={item.title} />
      
      <div className="cart-item-details">
        {/* Display item title */}
        <h3>{item.title}</h3>
        
        {/* Display item price */}
        <p>${item.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          {/* Decrement button */}
          <button onClick={handleDecrement}>-</button>
          
          {/* Quantity input field */}
          <input
            type="number"
            value={item.quantity}
            onChange={handleChange}
            min="1"
          />
          
          {/* Increment button */}
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      
      {/* Remove item button */}
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
