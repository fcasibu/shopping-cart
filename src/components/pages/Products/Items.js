import React, { useContext } from "react";
import styles from "../../../styles/Items.module.css";
import ProductsContext from "../../../products/ProductsContext";

const Items = () => {
  const ctx = useContext(ProductsContext);
  return (
    <main aria-label="Products Page" className={styles.products}>
      <div className={styles.items}>
        {ctx.items.map((el) => {
          return (
            <div key={el.id} className={styles.item}>
              <img src={el.image} alt={el.name} />
              <h2>{el.name}</h2>
              <div>
                <h2 className={styles.price}>{el.price}</h2>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Items;
