# shopping-cart-app

Welcome to the React Shopping Cart App! This is a simple web application built with React that allows users to browse through a list of products, add them to their cart, and adjust the quantity of items in the cart.

## Features

- **Home Page**: Displays a welcome message and an image. Users can click on a button to navigate to the shop page.
- **Shop Page**: Displays a list of products fetched from a mock API (FakeStore API). Each product card includes an image, title, price, and an "Add to Cart" button. Users can add products to their cart from this page.
- **Cart Page**: Displays the items added to the cart. Users can adjust the quantity of each item, remove items from the cart, and view the total price of their order.

## Getting Started

To run the app locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for handling routing in a React application.
- **FakeStore API**: Mock API for fetching product data.

## Folder Structure

```
react-shopping-cart-app/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   ├── CartItem.js
  │   │   ├── HomePage.js
  │   │   ├── Navbar.js
  │   │   └── ProductCard.js
  │   ├── pages/
  │   │   ├── CartPage.js
  │   │   └── ShopPage.js
  │   ├── App.css
  │   ├── App.js
  │   └── index.js
  ├── package.json
  └── README.md
```

## Additional Notes

- This app is styled using CSS, with variables defined for easy customization.
- Products are fetched from the FakeStore API, but you can replace it with any other API or local data source.
- Testing was done manually during development. For production use, thorough testing using tools like React Testing Library is recommended.

Feel free to explore and modify the code to suit your needs!

---

This README provides a brief overview of the app, how to run it, the technologies used, folder structure, and additional notes. Adjustments can be made based on your specific requirements or preferences.
