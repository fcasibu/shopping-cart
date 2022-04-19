import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsContext from "./ProductsContext";
import Cart from "../components/pages/Cart/Cart";

const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/data/products.json`);
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, []);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setTimeout(() => {
      setIsCartOpen(false);
    }, 300);
  };

  const addToCart = (item) => {
    setCart((state) => [...state, item]);
  };

  const removeFromCart = (name) => {
    const filterCart = cart.filter((item) => item.name === name);
    const newCart = cart.filter((item) => item.name !== filterCart[0].name);
    filterCart.splice(filterCart.length - 1, 1);
    setCart([...newCart, ...filterCart]);
  };

  const context = {
    items,
    cart,
    addToCart,
    removeFromCart,
    openCart,
    closeCart,
  };
  return (
    <ProductsContext.Provider value={context}>
      {children}
      {isCartOpen && <Cart />}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
