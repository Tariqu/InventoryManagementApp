const Joi = require('@hapi/joi');
const schema = require('./user.schema');
module.exports.user = {
  addValidation: (req, res, next) => {
    const body = req.body;
    const value = Joi.validate(body, schema.newUser);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message
      });
    } else {
      next();
    }
  },
  loginValidation: (req, res, next) => {
    const body = req.body;
    const value = Joi.validate(body, schema.login);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message
      });
    } else {
      next();
    }
  }
};
module.exports.product = {
  addValidation: (req, res, next) => {
    const body = req.body;
    const value = Joi.validate(body, schema.productAdd);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message
      });
    } else {
      next();
    }
  }
};
