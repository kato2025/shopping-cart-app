import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component displays navigation links and the cart count
const Navbar = ({ cartCount }) => {
  return (
    <nav>
      {/* Link to the Home page */}
      <Link to="/">Home</Link>
      
      {/* Link to the Shop page */}
      <Link to="/shop">Shop</Link>
      
      {/* Link to the Cart page, displaying the cart icon and item count */}
      <Link to="/cart">
        <img src="/cart.png" alt="Cart" className="cart-image" /> ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
