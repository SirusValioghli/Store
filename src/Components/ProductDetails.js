import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { ProductsContext } from "../context/ProductsContextProvider";
import { CartContext } from "../context/CartContextProvider";

//Functions
import { isInCart, quantityCount } from "../helpers/functions";

//Asstes
import trash from "../assets/icons/trash.svg";

//Styles
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const id = props.match.params.id;

  const products = useContext(ProductsContext);
  const product = products[id - 1];
  const { image, title, description, category, price } = product;

  const data = useContext(CartContext);
  const { state, dispatch } = data;

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={image}
        alt={`${title}`}
        style={{ width: "300px" }}
      />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>Category : </span>
          {category}
          <div className={styles.buttonContainer}>
            <div className={styles.quantityButton}>
              {quantityCount(state, product.id) > 1 && (
                <button
                  className={styles.smallButton}
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: product })
                  }
                >
                  -
                </button>
              )}
              {quantityCount(state, product.id) === 1 && (
                <button
                  className={styles.remButton}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: product })
                  }
                >
                  remove
                </button>
              )}
              <span className={styles.counter}>
                {quantityCount(state, product.id)}
              </span>
              {isInCart(state, product.id) ? (
                <button
                  className={styles.smallButton}
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: product })
                  }
                >
                  +
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product })
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Go to store</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
