import React from "react";
import { connect } from "react-redux";

import MenuItem from "./menuItem";
import isOrderCorrect from "../order/rules";

import errors from "../errors/errors";

function Menu(props) {
  return (
    <div className="product-listing">
      {props.food.map(food => (
        <MenuItem key={food.id} food={food} addOrder={props.addOrder} />
      ))}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addOrder: item => {
      let isGood = isOrderCorrect(item); // validate input
      if (isGood[0]) {
        dispatch({ type: "ADD", payload: item });
      } else {
        window.alert(errors[isGood[1]]);
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
