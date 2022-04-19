import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Header.module.css";
import ProductsContext from "../../products/ProductsContext";

const Header = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h2>Fake Chronkey</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className={styles.cart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{cart.length}</span>
          </Link>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;

Header.defaultProps = {
  cartSize: 0,
};

Header.propTypes = {
  cartSize: PropTypes.number,
};
