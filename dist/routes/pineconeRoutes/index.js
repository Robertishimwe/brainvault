"use strict";

var _require = require("express"),
  Router = _require.Router;
var uploadRoutes = require("./uploadRoutes");
var askRoutes = require("./askRoutes");
var router = Router();
router.use("/upload", uploadRoutes);
router.use("/ask", askRoutes);
module.exports = router;