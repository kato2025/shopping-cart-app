import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import './App.css';

// App component renders the application layout and sets up routing
const App = () => {
  // State to manage the cart items
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {/* Render the Navbar component with the cart count */}
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route for the Shop page */}
        <Route path="/shop" element={<ShopPage cart={cart} setCart={setCart} />} />
        
        {/* Route for the Cart page */}
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
