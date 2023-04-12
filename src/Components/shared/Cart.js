import React, { useContext } from "react";

//Context
import { CartContext } from "../../context/CartContextProvider";

// Functions
import { shorten } from "../../helpers/functions";

// Style
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = ({ productData }) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, price, quantity, id } = productData;

  return (
    <div className={styles.container}>
      <Link to={`/products/${id}`}>
        <img className={styles.productImage} src={image} alt="product" />
      </Link>
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity === 1 ? (
          <button
            className={styles.remButton}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            remove
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: productData })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
