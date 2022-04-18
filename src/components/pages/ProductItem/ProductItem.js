import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../../../products/ProductsContext";
import "../../../styles/ProductItem.module.css";

const ProductItem = () => {
  const { id } = useParams();
  const { items } = useContext(ProductsContext);
  const [filteredItem] = items.filter((item) => item.id === id);
  console.log(filteredItem);
  return (
    <React.Fragment>
      <img src={filteredItem.image} alt={filteredItem.name} />
      <h1>{filteredItem.name}</h1>
      <h2>{filteredItem.price}</h2>
    </React.Fragment>
  );
};

export default ProductItem;
