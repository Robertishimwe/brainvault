"use strict";

var _express = _interopRequireDefault(require("express"));
var _topicController = _interopRequireDefault(require("../controller/topicController"));
var _authenticator = _interopRequireDefault(require("../middleware/authenticator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post("/create", _authenticator["default"], _topicController["default"].createTopic);
router.get("/all", _authenticator["default"], _topicController["default"].allTopics);
router.get("/:id", _authenticator["default"], _topicController["default"].findTopic);
router.get("/name/:name", _authenticator["default"], _topicController["default"].findTopicByName);
router.get("/category/:category", _authenticator["default"], _topicController["default"].findTopicByCategory);
router.get("/name/:name/category/:category", _authenticator["default"], _topicController["default"].findTopicByNameAndCategory);
router.put("/:id/addsubitem", _authenticator["default"], _topicController["default"].addSubItem);
router.get("/:id/searchsubitem/:name", _authenticator["default"], _topicController["default"].searchSubItem);
router.get("/date/:date", _authenticator["default"], _topicController["default"].findTopicByDate);
router.get("/user/:user", _authenticator["default"], _topicController["default"].findTopicByUser);
router.get("/yourtopic", _authenticator["default"], _topicController["default"].findYourOwnTopic);
router.get("/main/searching", _authenticator["default"], _topicController["default"].mainSearch);
router.get("/user-search", _authenticator["default"], _topicController["default"].userSearch);
module.exports = router;