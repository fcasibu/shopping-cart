import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/Products.module.css";

const Products = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Products;
