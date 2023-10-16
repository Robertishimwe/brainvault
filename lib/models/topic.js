"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var topicShema = new Schema({
  name: {
    type: "string",
    required: true,
    min: 4,
    max: 20
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: "string",
    min: 2,
    max: 20
  },
  subItem: [],
  createDate: {
    type: "date",
    "default": Date.now()
  }
});
var Topic = _mongoose["default"].model("Topic", topicShema);
var _default = exports["default"] = Topic;