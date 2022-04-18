import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div>Custom Keyboard</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
