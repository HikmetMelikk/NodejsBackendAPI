const express = require("express");
const Customer = require("../models/customerModel");
const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controller/customerController");

const router = express.Router();

router.get("/", getCustomers);

router.get("/:id", getCustomer);

router.post("/", createCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

module.exports = router;
