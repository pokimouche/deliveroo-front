import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import convertPrice from "../utils/convertPrice";

const CartItem = props => {
  const { item, cart, setCart } = props;

  const incrementQuantity = () => {
    const newCart = { ...cart };
    const checkCartItem = newCart.items.findIndex(
      element => element.id === item.id
    );
    newCart.items[checkCartItem].quantity++;
    newCart.totalPrice = newCart.totalPrice + item.price;
    setCart(newCart);
  };

  const decrementQuantity = event => {
    const newCart = { ...cart };
    const checkCartItem = newCart.items.findIndex(
      element => element.id === item.id
    );
    newCart.items[checkCartItem].quantity--;
    if (newCart.items[checkCartItem].quantity === 0) {
      newCart.items.splice(checkCartItem, 1);
    }
    newCart.totalPrice = newCart.totalPrice - item.price;
    setCart(newCart);
  };
  return (
    <div className="cart-line">
      <div className="cart-counter">
        <span onClick={decrementQuantity} className="decrement-quantity">
          <FontAwesomeIcon icon="minus-circle" />
        </span>
        <span className="counter">{item.quantity}</span>
        <span onClick={incrementQuantity} className="increment-quantity">
          <FontAwesomeIcon icon="plus-circle" />
        </span>
      </div>
      <span className="cart-item-name">{item.title}</span>
      <span className="cart-item-price">{convertPrice(item.price)} €</span>
    </div>
  );
};

export default CartItem;
