const express = require("express");
const router = require("express").Router();
const controller = require("./product.controller");
const inputValidation = require("../validation/user.validation").product;

router.post("/products", inputValidation.addValidation, controller.create);
router.get("/products", controller.list);
router.get("/products/:id", controller.getProduct);
// router.post('/user/:id');
// router.post('/update');
router.patch(
  "/products/:id",
  inputValidation.addValidation,
  controller.updateProduct
);
router.delete("/products/:id", controller.deleteProduct);
// router.post('/login', controller.login);

module.exports = router;
