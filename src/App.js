import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import ProductItem from "./components/pages/ProductItem/ProductItem";

const App = () => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/shop" element={<Products />}>
          <Route path=":id" element={<ProductItem />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
