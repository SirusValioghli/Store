import React from "react";
import { useContext } from "react";

//Context
import { ProductsContext } from "../context/ProductsContextProvider";

//Components
import Product from "./shared/Product";

// Style
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
