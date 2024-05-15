const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();
app.use(express.json());
app.use(express.json());

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://bakiget78:BFQVHMibLfEKV9yK@backenddb.a4arnny.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connect to the DB");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
