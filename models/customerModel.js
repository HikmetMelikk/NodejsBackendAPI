const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Please enter a customer name!"],
    },
    customerPhone: {
      type: Number,
      required: true,
    },
    customerAddress: {
      type: String,
      required: false,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    orderName: {
      type: String,
      required: [true, "Order name can't be empty"],
    },
    orderId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
