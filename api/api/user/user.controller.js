const userService = require('./user.service');
const KEY = require('../../config/config').SCERET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create: (req, res) => {
    const body = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(body.password, salt);
    body.password = hash;
    userService
      .create(body)
      .then(result => {
        res.json({
          success: 1,
          message: 'Signup done Successfully..'
        });
      })
      .catch(err => {
        if (err.name === 'MongoError') {
          res.json({
            success: 0,
            message: err.errmsg
          });
        }
      });
  },
  login: (req, res) => {
    const body = req.body;
    userService.login(body.username).then(result => {
      if (result) {
        const hash = result.password;
        let value = bcrypt.compareSync(body.password, hash);
        if (value) {
          const token = jwt.sign({ result: result }, KEY, {
            expiresIn: '1h'
          });
          res.json({
            success: 1,
            message: 'Login Successfully...',
            token: token
          });
        } else {
          res.json({
            success: 0,
            message: 'Invalid Username or Password...'
          });
        }
      } else {
        res.json({
          success: 0,
          message: 'Username not found please Signup...'
        });
      }
    });
  }
};
