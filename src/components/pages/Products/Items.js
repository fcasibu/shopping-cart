import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/Items.module.css";
import ProductsContext from "../../../products/ProductsContext";

const Items = () => {
  const { items, cart, addToCart } = useContext(ProductsContext);

  const addToCartHandler = ({ target: btn }) => {
    const [filteredItem] = items.filter((item) => item.id === btn.id);
    addToCart(filteredItem);
  };

  const isAddedToCart = (item) => {
    const isAdded = cart.some((el) => el.name === item.name);
    if (isAdded) {
      return <button className={styles.disabled}>Added to Cart</button>;
    }

    return (
      <button id={item.id} onClick={(e) => addToCartHandler(e)}>
        Add To Cart
      </button>
    );
  };

  const renderItems = () => {
    return items.map((item) => {
      return (
        <div key={item.id} className={styles.item}>
          <Link to={item.id}>
            <div className={styles["image-container"]}>
              <img height="250" width="250" src={item.image} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
          </Link>
          <div>
            <h2 className={styles.price}>{item.price}</h2>
            {isAddedToCart(item)}
          </div>
        </div>
      );
    });
  };

  return (
    <main className={styles.products}>
      <div className={styles.items}>{renderItems()}</div>
    </main>
  );
};

export default Items;
