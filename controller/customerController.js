const Customer = require("../models/customerModel");
const asyncHandler = require("express-async-handler");

//! Get All Customers

const getCustomers = asyncHandler(async (req, res) => {
  try {
    const customer = await Customer.find({});
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//! Get Single Customer

const getCustomer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//! Create a Customer

const createCustomer = asyncHandler(async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//! Updating a Customer

const updateCustomer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndUpdate(id, req.body);
    if (!customer) {
      return res
        .status(404)
        .json({ message: `cannot find and customer with ID ${id}` });
    }
    const updatedCustomer = await Customer.findById(id);
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//! Delete a Customer

const deleteCustomer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      res.status(404);
      throw new Error(`cannot find a customer with ID ${id}`);
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
