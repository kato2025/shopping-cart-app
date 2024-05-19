import React from 'react';
import { Link } from 'react-router-dom';

// HomePage component displays the home page content
const HomePage = () => {
  return (
    <div className="home-container">
      {/* Display welcome message */}
      <h1>Welcome to NamueneTec Store</h1>
      
      {/* Display main image */}
      <img src="/mainimage.jpg" alt="Main" className="main-image" />
      
      {/* Link to the Shop page */}
      <Link to="/shop">
        <button className="shop-button">Go to Shop</button>
      </Link>
    </div>
  );
};

export default HomePage;
