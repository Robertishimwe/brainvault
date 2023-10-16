"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  var token = req.header("token");
  if (!token) {
    return res.status(401).send({
      Message: "You are not allowed to access this page"
    });
  } else {
    try {
      var authorized = _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET);
      req.user = authorized;
      next();
    } catch (error) {
      res.status(400).send({
        Message: "invalide token"
      });
    }
  }
};