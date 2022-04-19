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

  const isAddedToCart = (el) => {
    if (cart.includes(el)) {
      return <button className={styles.disabled}>Added to Cart</button>;
    }

    return (
      <button id={el.id} onClick={(e) => addToCartHandler(e)}>
        Add To Cart
      </button>
    );
  };

  return (
    <main className={styles.products}>
      <div className={styles.items}>
        {items.map((el) => {
          return (
            <div key={el.id} className={styles.item}>
              <Link to={el.id}>
                <img src={el.image} alt={el.name} />
                <h2>{el.name}</h2>
              </Link>
              <div>
                <h2 className={styles.price}>{el.price}</h2>
                {isAddedToCart(el)}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Items;
