const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  getProductById,
  postProduct,
} = require("../controllers/product.controller");
const authentication = require("../middleware/auth.middleware");

// Get all products
productRouter.get("/product",authentication, getAllProducts);

// Get a single product by ID
productRouter.get("/product/:id",authentication, getProductById);

//post
productRouter.post("/product/add",authentication,postProduct);

module.exports = productRouter;
