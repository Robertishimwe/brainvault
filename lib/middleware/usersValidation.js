"use strict";

var _joi = _interopRequireDefault(require("@hapi/joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//registration validation
var regiserValidation = function regiserValidation(reqBody) {
  var registrationSchema = {
    userName: _joi["default"].string().min(4).required(),
    userEmail: _joi["default"].string().email().required(),
    userPassword: _joi["default"].string().min(4).required(),
    userRole: _joi["default"].string()
  };
  return _joi["default"].validate(reqBody, registrationSchema);
};
module.exports.regiserValidation = regiserValidation;
// login validation

var loginValidation = function loginValidation(reqBody) {
  var loginSchema = {
    userEmail: _joi["default"].string().email().required(),
    userPassword: _joi["default"].string().min(4).required()
  };
  return _joi["default"].validate(reqBody, loginSchema);
};
module.exports = {
  loginValidation: loginValidation,
  regiserValidation: regiserValidation
};