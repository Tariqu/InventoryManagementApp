const Joi = require('@hapi/joi');
const schema = {
  newUser: {
    username: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .alphanum()
      .min(6)
      .required()
  },
  login: {
    username: Joi.string().required(),
    password: Joi.string()
      .alphanum()
      .min(6)
      .required()
  },
  productAdd: {
    name: Joi.string().required(),
    price: Joi.number()
      .integer()
      .min(0)
      .required(),
    rating: Joi.number().required()
  }
};

module.exports = schema;
