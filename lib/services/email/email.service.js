"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _nodemailerSendinblueTransport = _interopRequireDefault(require("nodemailer-sendinblue-transport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var emailService = function emailService(sendTo, subject, htmlTemp) {
  var transporter = _nodemailer["default"].createTransport(new _nodemailerSendinblueTransport["default"]({
    apiKey: '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'
  }));
  var footer = "<p>This email was sent from Brain vault.</p>";
  var options = {
    from: process.env.SEND_FROM,
    to: sendTo,
    subject: subject,
    html: "".concat(htmlTemp, " <br/> <br/>").concat(footer)
  };
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return err;
    }
    console.log(info);
    return info.response;
  });
};
var _default = exports["default"] = emailService;