const productService = require("./product.service");
const KEY = require("../../config/config").SCERET_KEY;
const jwt = require("jsonwebtoken");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    productService.create(body).then(result => {
      res.json({
        success: 1,
        message: "Product add Successfully..",
        data: result
      });
    });
  },
  list: (req, res) => {
    productService.list().then(result => {
      result = result.map(item => {
        return {
          id: item._id,
          name: item.name,
          price: item.price,
          rating: item.rating
        };
      });
      res.json({
        success: 1,
        data: result
      });
    });
  },
  getProduct: (req, res) => {
    const id = req.params.id;
    productService.getProduct(id).then(result => {
      result = {
        id: result._id,
        name: result.name,
        price: result.price,
        rating: result.rating
      };
      res.json({
        success: 1,
        data: result
      });
    });
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id).then(result => {
      if (result.deletedCount) {
        res.json({
          success: 1,
          message: "Product deleted Successfully...",
          data: result
        });
      } else {
        res.json({
          success: 0,
          message: "Product delete failed"
        });
      }
    });
  },
  updateProduct: (req, res) => {
    const id = req.params.id;
    productService.updateProduct(id, req.body).then(result => {
      res.json({
        success: 1,
        message: "Product Updated Successfully...",
        data: result
      });
    });
  }
};
