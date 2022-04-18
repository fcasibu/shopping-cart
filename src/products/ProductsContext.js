import React from "react";

const ProductsContext = React.createContext({
  items: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default ProductsContext;
