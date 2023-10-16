"use strict";

var _express = _interopRequireDefault(require("express"));
var _dashboard = _interopRequireDefault(require("../../controller/dashboard"));
var _authenticator = _interopRequireDefault(require("../../middleware/authenticator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/", _dashboard["default"].mainDashboardHandler);
module.exports = router;