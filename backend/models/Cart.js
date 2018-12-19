const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  products: [
    {
      title: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  }
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
