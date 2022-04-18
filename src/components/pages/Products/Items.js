import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/Items.module.css";
import ProductsContext from "../../../products/ProductsContext";

const Items = () => {
  const { items, addToCart } = useContext(ProductsContext);
  return (
    <main aria-label="Products Page" className={styles.products}>
      <div className={styles.items}>
        {items.map((el) => {
          return (
            <div key={el.id} className={styles.item}>
              <img src={el.image} alt={el.name} />
              <Link to={el.id}>
                <h2>{el.name}</h2>
              </Link>
              <div>
                <h2 className={styles.price}>{el.price}</h2>
                <button onClick={() => addToCart(el)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Items;
