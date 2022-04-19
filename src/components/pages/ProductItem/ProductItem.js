import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../../../products/ProductsContext";
import styles from "../../../styles/ProductItem.module.css";

const ProductItem = () => {
  const { id } = useParams();
  const { items, cart, addToCart, removeFromCart } =
    useContext(ProductsContext);
  const [filteredItem] = items.filter((item) => item.id === id);
  const cartItems = cart.filter((item) => item.id === id);
  const [itemQuantity, setItemQuantity] = useState(cartItems.length);

  const increaseQuantity = () => {
    if (itemQuantity < 5) {
      setItemQuantity(itemQuantity + 1);
      addToCart(filteredItem);
    }
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      removeFromCart(filteredItem.name);
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles["product-image"]}>
        <img src={filteredItem.image} alt={filteredItem.name} />
      </div>
      <div className={styles["product-info"]}>
        <h1>{filteredItem.name}</h1>
        <h2>{filteredItem.price}</h2>
        <div className={styles.quantity}>
          <label>Quantity</label>
          <div>
            <button onClick={decreaseQuantity}>-</button>
            <input type="number" readOnly value={itemQuantity} max="5" />
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
