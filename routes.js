const routes = require("./routes/routes");

app.use("/api", routes);

const express = require("express");

const router = express.Router();

module.exports = router;
