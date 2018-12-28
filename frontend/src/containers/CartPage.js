import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart, increaseQuantity } from "../actions/cartActions";

class CartPage extends Component {
  render() {
    const pricePerItem = this.props.cart.map(
      p =>
        (p.quantity *
          parseFloat(p.item.price.slice(1, p.item.price.length)) *
          100) /
        100
    );
    const total = pricePerItem.reduce((prev, curr) => prev + curr, 0);
    let tab = [];
    this.props.cart.map(t => tab.push(t.quantity));
    const totalQuantity =
      tab !== [] ? tab.reduce((prev, cur) => prev + cur, 0) : 0;
    const cartItem = this.props.cart.map((t, i) => (
      <Row key={i}>
        <Col>
          <h3>{t.item.title}</h3>
        </Col>
        <Col>{t.item.price}</Col>
        <Col>{t.quantity}</Col>
        <Button onClick={() => this.props.increaseQuantity(t.quantity)}>
          +
        </Button>
        <Col>
          {"$" +
            (
              (t.quantity *
                parseFloat(t.item.price.slice(1, t.item.price.length)) *
                100) /
              100
            ).toFixed(2)}
        </Col>
      </Row>
    ));

    return (
      <div>
        <h1>Your basket :</h1>
        {cartItem}
        <Row>
          <Col>Total</Col>
          <Col />
          <Col>{totalQuantity}</Col>
          <Col>{"$" + total}</Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = {
  CartPage,
  addToCart,
  increaseQuantity
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
