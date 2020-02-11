import React from "react";
import Category from "./Category";
import Cart from "./Cart";

const Main = props => {
  const { cart, setCart } = props;

  return (
    <main className="container">
      <div className="center-main">
        <ul className="category">
          {props.categories.reduce((array, element, index) => {
            if (element.meals.length > 0) {
              array.push(
                <Category
                  cart={cart}
                  setCart={setCart}
                  key={index}
                  category={element}
                ></Category>
              );
            }
            return array;
          }, [])}
        </ul>
        <Cart cart={cart} setCart={setCart}></Cart>
      </div>
    </main>
  );
};

export default Main;
