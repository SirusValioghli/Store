import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Asstes
import trash from "../../assets/icons/trash.svg";

//Functions
import { isInCart, shorten, quantityCount } from "../../helpers/functions";

//Context
import { CartContext } from "../../context/CartContextProvider";

// Style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={productData.image}
        alt="product"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.remButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              remove
            </button>
          )}
          <span className={styles.counter}>
            {quantityCount(state, productData.id)}
          </span>
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
