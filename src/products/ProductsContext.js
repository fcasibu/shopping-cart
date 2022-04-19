import React from "react";

const ProductsContext = React.createContext({
  items: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
});

export default ProductsContext;
