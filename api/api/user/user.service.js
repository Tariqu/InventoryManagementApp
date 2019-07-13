const User = require('./user.model');

module.exports = {
  create: data => {
    return User.create(data);
  },
  login: username => {
    return User.findOne({ username: username });
  }
};
