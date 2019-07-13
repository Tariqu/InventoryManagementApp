const jwt = require("jsonwebtoken");
const KEY = require("../../config/config").SCERET_KEY;
module.exports = {
  checkToken: (req, res, next) => {
    if (req.path === "/api/Accounts/login" || req.path === "/api/Accounts") {
      next();
    } else {
      let token = req.get("authorization");
      if (token) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        jwt.verify(token, KEY, (err, decoded) => {
          if (err) {
            return res.json({
              success: 0,
              message: "Invalid Token..."
            });
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        return res.json({
          success: 0,
          message: "Access Denied! Unauthorized User"
        });
      }
    }
  }
};
