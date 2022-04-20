import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import ProductItem from "./components/pages/ProductItem/ProductItem";
import Header from "./components/Header/Header";
import ProductsProvider from "./products/ProductsProvider";
import Items from "./components/pages/Products/Items";

const App = () => {
  return (
    <ProductsProvider>
      <Router basename="/">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Items />} />
            <Route path=":id" element={<ProductItem />} />
          </Route>
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
