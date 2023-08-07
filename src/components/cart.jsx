import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const { setCartCount, cartCount } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleAddToCart = (no, e) => {
    e.preventDefault();

    if (no === -1 && count === 0) {
      setText("");
    } else {
      setCartCount(cartCount + no);
      setCount(count + no);
      setText("Customizations available");
    }
  };
  // console.log(props);

  return (
    <>
      <div className="quantity-button">
        <button
          className="add-cart"
          onClick={(e) => handleAddToCart(-1, e)}
        >
          -
        </button>
        <div className="add-cartone">{count}</div>
        <button
          onClick={(e) => handleAddToCart(1, e)}
          className="add-carttwo"
        >
          +
        </button>
      </div>
      {props.item.dish_Availability ? (
        <h4 className="availability">{text}</h4>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
