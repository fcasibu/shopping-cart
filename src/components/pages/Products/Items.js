import React, { useContext } from "react";
import styles from "../../../styles/Items.module.css";
import ProductsContext from "../../../products/ProductsContext";

const Items = () => {
  const ctx = useContext(ProductsContext);
  return (
    <main aria-label="Products Page">
      <div className={styles.items}>
        {ctx.items.map((el) => {
          return (
            <div key={el.id} className={styles.item}>
              <img src={el.image} alt={el.name} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Items;
