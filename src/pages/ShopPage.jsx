import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

// ShopPage component fetches and displays products from an API and handles adding products to cart
const ShopPage = ({ cart, setCart }) => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  // Fetch products from the API when the component mounts
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  // Function to add a product to the cart
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div className="shop-container">
      {/* Map through products and render ProductCard component for each product */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ShopPage;
