import React from "react";

const ProductsContext = React.createContext({
  items: [],
  cart: [],
  filteredCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
});

export default ProductsContext;
