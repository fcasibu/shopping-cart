import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default Products;
