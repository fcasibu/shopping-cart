import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/Showcase.module.css";

const Showcase = () => {
  return (
    <main className={styles.showcase} aria-label="Homepage">
      <div>
        <h1>Chronkey Q3</h1>
        <h2>High quality, Best Value</h2>
        <Link to="/products">
          <button type="button">Shop now</button>
        </Link>
      </div>
    </main>
  );
};

export default Showcase;