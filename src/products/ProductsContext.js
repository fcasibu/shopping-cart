import React from "react";

const ProductsContext = React.createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default ProductsContext;
