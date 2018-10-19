import React from "react";
import { connect } from "react-redux";

import { isReadyToSubmit } from "./rules";
import store from "../config/store";
import errors from "../errors/errors";

function OrderCart(props) {
  return (
    <div>
      <div>
        {props.order.map(item => (
          <ul key={item.id}>
            <li>
              {item.name}
              <span> </span>
              {item.price}
            </li>
          </ul>
        ))}
      </div>
      <h2> Total: £{getTotal()}</h2>
      <button onClick={props.submitOrder} className="submit-button">
        Submit
      </button>
    </div>
  );
}

// Current total
function getTotal() {
  let currentOrder = store.getState().order;
  let sum = 0;
  for (let order of currentOrder) {
    sum += order.price;
  }
  return sum;
}

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitOrder: item => {
      let ready = isReadyToSubmit();
      if (ready[0]) {
        dispatch({ type: "FINISHED", payload: item });
      } else {
        window.alert(errors[ready[1]]);
      }
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCart);
