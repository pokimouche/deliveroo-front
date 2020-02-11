import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import convertPrice from "../utils/convertPrice";

const Card = props => {
  const { cart, setCart } = props;

  const addToCart = event => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const cardData = document.getElementById(id);
    let { price, title } = cardData.dataset;
    price = parseFloat(price);
    const newCart = { ...cart };
    const checkCartItem = newCart.items.findIndex(element => element.id === id);
    if (checkCartItem !== -1) {
      newCart.items[checkCartItem].quantity++;
      newCart.totalPrice += price;
    } else {
      newCart.items.push({
        id: id,
        title: title,
        quantity: 1,
        price: price
      });
      newCart.totalPrice += price;
    }

    setCart(newCart);
  };

  return (
    <li
      id={props.meal.id}
      data-price={props.meal.price}
      data-title={props.meal.title}
      onClick={addToCart}
    >
      <div className="card-wrapper">
        <div className="card-left">
          <h3>{props.meal.title}</h3>
          <p className="meal-description">{props.meal.description}</p>
          <div className="card-infos">
            <span className="card-price">
              {convertPrice(props.meal.price)} €
            </span>
            {props.meal.popular ? (
              <span className="card-popular">
                <FontAwesomeIcon icon="star" />
                <span>Populaire</span>
              </span>
            ) : null}
          </div>
        </div>
        {props.meal.picture !== undefined ? (
          <div className="card-right">
            <img src={props.meal.picture} alt={props.meal.title}></img>
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default Card;
