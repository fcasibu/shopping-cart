import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/data/products.json`);
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setCart((state) => [...state, item]);
  };

  const context = {
    items,
    cart,
    addToCart,
    removeFromCart: () => {},
  };
  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
