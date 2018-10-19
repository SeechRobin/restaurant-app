import React from "react";

export default function MenuItem(props) {
  return (
    <div className={getClasses()} onClick={() => props.addOrder(props.food)}>
      <h2> {props.food.name}</h2>
      <p> £{props.food.price}</p>
    </div>
  );

  function getClasses() {
    let classes = "product-listing-item";
    classes += props.food.quantity === 0 ? "-gray-out" : "";
    return classes;
  }
}
