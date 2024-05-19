import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Test to ensure navigation links are rendered
test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Find navigation links by their text content
  const homeLink = screen.getByText(/Home/i);
  const shopLink = screen.getByText(/Shop/i);

  // Assert that navigation links are present in the document
  expect(homeLink).toBeInTheDocument();
  expect(shopLink).toBeInTheDocument();
});
