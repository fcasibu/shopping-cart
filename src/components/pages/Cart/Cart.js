import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "../../../styles/Cart.module.css";
import ProductsContext from "../../../products/ProductsContext";

const Backdrop = ({ onClose, hide }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      style={hide ? { width: "0px" } : {}}
    ></div>
  );
};

const CartModal = ({ onClose, hide, cart, addToCart, removeFromCart }) => {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < cart[i].quantity; j++) {
        total += Math.round(parseFloat(cart[i].cartItem.price.slice(1)));
      }
    }
    setSubTotal(formatter.format(total));
    console.log(total);
  }, [cart]);

  const increaseQuantity = (event) => {
    const filteredItem = cart.filter(
      (el) => el.cartItem.id === event.target.id
    );
    if (filteredItem[0].quantity < 5) {
      addToCart(filteredItem[0].cartItem);
    }
  };

  const decreaseQuantity = (event) => {
    const filteredItem = cart.filter(
      (el) => el.cartItem.id === event.target.id
    );

    if (filteredItem[0].quantity > 0) {
      removeFromCart(filteredItem[0].cartItem.name);
    }
  };

  return (
    <div className={styles.cart} style={hide ? { width: "0px" } : {}}>
      <div className={styles["top-cart"]}>
        <h2>Your Cart</h2>
        <div onClick={onClose} className={styles.close}>
          X
        </div>
      </div>
      <div
        className={styles["items-container"]}
        style={!cart.length ? { overflow: "auto" } : {}}
      >
        {cart.length ? (
          Object.values([...cart])
            .sort((a, b) => b.cartItem.id - a.cartItem.id)
            .map((el) => {
              return (
                <div key={el.cartItem.id} className={styles["cart-items"]}>
                  <div className={styles["product-image"]}>
                    <img src={el.cartItem.image} alt={el.cartItem.name} />
                  </div>
                  <div className={styles["product-info"]}>
                    <h1>{el.cartItem.name}</h1>
                    <h2>{el.cartItem.price}</h2>
                    <div className={styles.quantity}>
                      <label>Quantity</label>
                      <div>
                        <button id={el.cartItem.id} onClick={decreaseQuantity}>
                          -
                        </button>
                        <input
                          type="number"
                          value={el.quantity}
                          readOnly
                          max="5"
                        />
                        <button id={el.cartItem.id} onClick={increaseQuantity}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <h2>No Items in Cart</h2>
        )}
      </div>
      {cart.length ? (
        <div className={styles.payout}>
          <h2 className={styles.total}>
            Subtotal: <span>{subTotal}</span>
          </h2>
          <button className={styles.checkout}>Checkout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const Cart = () => {
  const { closeCart, filteredCart, addToCart, removeFromCart } =
    useContext(ProductsContext);
  const [hide, setHide] = useState(false);

  const closeCartHandler = () => {
    closeCart();
    setHide(true);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartModal
          onClose={closeCartHandler}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          hide={hide}
          cart={filteredCart}
        />,
        document.querySelector("#sidebar")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={closeCartHandler} hide={hide} />,
        document.querySelector("#backdrop")
      )}
    </React.Fragment>
  );
};

export default Cart;

CartModal.propTypes = {
  onClose: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  hide: PropTypes.bool,
  cart: PropTypes.arrayOf(PropTypes.object),
  counter: PropTypes.object,
};
Backdrop.propTypes = {
  onClose: PropTypes.func,
  hide: PropTypes.bool,
};
