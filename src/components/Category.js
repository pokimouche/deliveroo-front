import React from "react";
import Card from "./Card";

const Category = props => {
  const { cart, setCart } = props;
  return (
    <li>
      <h2>{props.category.name}</h2>
      <ul className="meals">
        {props.category.meals.map(element => {
          return (
            <Card
              cart={cart}
              setCart={setCart}
              key={element.id}
              meal={element}
            ></Card>
          );
        })}
      </ul>
    </li>
  );
};

export default Category;
