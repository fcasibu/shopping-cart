import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import ProductItem from "./components/pages/ProductItem/ProductItem";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<ProductItem />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
