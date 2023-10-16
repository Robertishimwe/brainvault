"use strict";

var _express = _interopRequireDefault(require("express"));
var _usersController = _interopRequireDefault(require("../controller/usersController"));
var _authenticator = _interopRequireDefault(require("../middleware/authenticator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/login", _usersController["default"].login);
router.post("/register", _usersController["default"].createUser);
router.get("/user", _authenticator["default"], _usersController["default"].findAllUsers);
router.get("/user/:id", _authenticator["default"], _usersController["default"].findOneUser);
router.get("/user/email/:email", _authenticator["default"], _usersController["default"].findUserByEmail);
router.get("/user/name:name", _authenticator["default"], _usersController["default"].findUserByName);
router.put("/user/update/:id", _authenticator["default"], _usersController["default"].updateUser);
router["delete"]("/user/delete/:id", _authenticator["default"], _usersController["default"].deleteUser);
router.put("/user/:id/block", _authenticator["default"], _usersController["default"].blockUser);
router.put("/user/:id/unblock", _authenticator["default"], _usersController["default"].unblockUser);
router.put("/badges/:id/deletebadges", _authenticator["default"], _usersController["default"].deleteUserBadges);
router.get("/user/:role", _authenticator["default"], _usersController["default"].findUserByRole);
router.put("/user/:id/role", _authenticator["default"], _usersController["default"].assignRole);
router.put("/user/:id/badges", _authenticator["default"], _usersController["default"].assignBadge);
module.exports = router;