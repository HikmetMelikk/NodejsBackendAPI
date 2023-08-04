require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const customerRoute = require("./routes/customerRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const DB_CONNECTION = process.env.DB_CONNECTION;

//! Sadece kimin bağlanabileceğine karar verdiğimiz kısım
//const corsOptions = {
//  origin: "http://example.com",
//  optionSuccessStatus: 200,
//};

//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/customer", customerRoute);

app.get("/", (req, res) => {
  res.send("Acaba basardim mi?");
});

app.get("/blog", (req, res) => {
  res.send("Sanirim basardim, basardim lan");
});

app.use(errorMiddleware);

mongoose
  .connect(DB_CONNECTION)
  .then(() => {
    console.log("connected database");
    app.listen(PORT, () => {
      console.log("port calisiyor");
    });
  })
  .catch((error) => {
    console.log(error);
  });
