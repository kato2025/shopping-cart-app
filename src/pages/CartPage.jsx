import React from 'react';
import CartItem from '../components/CartItem';

// CartPage component displays the cart items and handles removal and quantity updates
const CartPage = ({ cart, setCart }) => {
  
  // Function to handle removing an item from the cart
  const handleRemove = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Function to handle updating the quantity of a cart item
  const handleUpdateQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: quantity }
        : item
    ));
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      
      {/* Display message if cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Map through cart items and render CartItem component for each item */}
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          
          {/* Display the total price of items in the cart */}
          <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
