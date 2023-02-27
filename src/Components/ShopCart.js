import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../context/CartContextProvider";

//Components
import Cart from "./shared/Cart";

// Style
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const { total, itemsCounter } = state;

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((product) => (
          <Cart key={product.id} productData={product} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            {" "}
            <span> Total Items : </span>
            {total} $
          </p>
          <p>
            {" "}
            <span> itemsCounter : </span>
            {itemsCounter}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Chek Out
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Checked Out Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
      {!state.checkout && itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">Go Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
