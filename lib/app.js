"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Import Routes

var users_route = require("./routes/userRoute2");
var topics_route = require("./routes/topicRoute");
var knowledgebase = require("./routes/pineconeRoutes");
var task_route = require("./routes/task");
var dashboard_route = require("./routes/dashboard");
var scheduleCronJob = require("./services/cronJob/cronJob");

//Database connection
_mongoose["default"].connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("database connected......");
})["catch"](function (error) {
  console.log("database not connected" + error);
})["finally"](scheduleCronJob());

// Route
app.use(_express["default"].json());
app.use("/api", users_route);
app.use("/api/task", task_route);
app.use("/api/topic", topics_route);
app.use("/api/dashboard", dashboard_route);
app.use("/api/knowleadge-base", knowledgebase);

//port connection
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server running on port:".concat(port));
});
module.exports = app;