import React from "react";
import CartItem from "./CartItem";
import convertPrice from "../utils/convertPrice";

const Cart = props => {
  const { cart, setCart } = props;
  return (
    <div className="cart">
      <div className="cart-card">
        <button
          className={`cart-btn  ${
            cart.items.length > 0 ? null : "cart-disabled"
          }`}
        >
          Valider mon panier
        </button>

        {cart.items.length > 0 ? (
          <>
            <div className="cart-items">
              {cart.items.map((element, index) => {
                return (
                  <CartItem
                    item={element}
                    cart={cart}
                    setCart={setCart}
                    key={index}
                  ></CartItem>
                );
              })}
            </div>
            <ul className="price-detail">
              <li>
                <span>Sous-total</span> {convertPrice(cart.totalPrice)} €
              </li>
              <li>
                <span>Frais de livraison</span>{" "}
                {convertPrice(cart.deliveryCost)} €
              </li>
            </ul>
            <div className="total-price">
              <span>Total</span>{" "}
              {convertPrice(cart.totalPrice + cart.deliveryCost)} €
            </div>
          </>
        ) : (
          <div className="card-empty">Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
