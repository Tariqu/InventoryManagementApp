const Product = require("./product.model");

module.exports = {
  create: data => {
    return Product.create(data);
  },
  list: () => {
    return Product.find({});
  },
  getProduct: id => {
    return Product.findById(id);
  },
  deleteProduct: id => {
    return Product.deleteOne({ _id: id });
  },
  updateProduct: (id, data) => {
    return Product.findByIdAndUpdate(id, data);
  }
};
