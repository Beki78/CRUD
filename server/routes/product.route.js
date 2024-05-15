const express = require("express");
const router = express.Router();
const Product = require("../routes/product.route.js");
const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
