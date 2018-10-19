import React, { Component } from "react";

import api from "../api/api";
import Menu from "../menu";
import OrderCart from "../order/";

class menuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: []
    };
    this.api = new api();
  }
  //TODO: API Call to fulfuil order, kitchen start cooking
  handleSubmitOrder = () => {
    console.log("handle submit order!");
  };

  componentDidMount() {
    this.api.getMenu().then(res => {
      this.setState({ food: res.data });
    });
  }
  render() {
    return (
      <div className="column-layout">
        <div className="main-column">
          <h1> Menu</h1>
          <Menu food={this.state.food} />
        </div>
        <div className="order-list">
          <h2> Order </h2>
          <OrderCart submitOrder={this.handleSubmitOrder} />
        </div>
      </div>
    );
  }
}

export default menuPage;
