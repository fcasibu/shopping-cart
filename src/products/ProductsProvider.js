import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsContext from "./ProductsContext";
import Cart from "../components/pages/Cart/Cart";

const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filteredCart, setFilteredCart] = useState([]);
  const counter = {};

  useEffect(() => {
    cart.forEach((item) => {
      counter[JSON.stringify(item)] = (counter[JSON.stringify(item)] || 0) + 1;
    });
    const newCart = Object.entries(counter).map(([key, val]) => {
      return { cartItem: JSON.parse(key), quantity: val };
    });

    setFilteredCart(newCart);
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`data/products.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
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
    setCart([...filterCart, ...newCart]);
  };

  const context = {
    items,
    cart,
    filteredCart,
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
