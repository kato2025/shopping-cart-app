import React, { useState } from 'react';

// ProductCard component displays individual product details and handles adding to cart
const ProductCard = ({ product, addToCart }) => {
  // State to manage the quantity of the product to add to cart
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      {/* Display product title */}
      <h3>{product.title}</h3>
      
      {/* Display product image */}
      <img src={product.image} alt={product.title} />
      
      {/* Display product price */}
      <p>Price: ${product.price}</p>
      
      <div>
        {/* Button to decrement the quantity, disabled if quantity is 1 */}
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
        
        {/* Input field to change quantity */}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        
        {/* Button to increment the quantity */}
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      
      {/* Button to add product to cart with the selected quantity */}
      <button onClick={() => addToCart(product, quantity)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
