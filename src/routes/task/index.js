import express from "express";
import TaskController from "../../controller/task";
import verify from "../../middleware/authenticator";
const router = express.Router();

router.post("/create",verify, TaskController.createTaskHandler);
// router.get("/all", verify, topicController.allTopics);
// router.get("/:id", verify, topicController.findTopic);
// router.get("/name/:name", verify, topicController.findTopicByName);
// router.get("/category/:category", verify, topicController.findTopicByCategory);
// router.get("/name/:name/category/:category", verify, topicController.findTopicByNameAndCategory);
// router.put("/:id/addsubitem", verify, topicController.addSubItem);
// router.get("/:id/searchsubitem/:name", verify, topicController.searchSubItem);
// router.get("/date/:date", verify, topicController.findTopicByDate);
// router.get("/user/:user", verify, topicController.findTopicByUser);
// router.get("/yourtopic", verify, topicController.findYourOwnTopic);
// router.get("/main/searching", verify, topicController.mainSearch);
// router.get("/user-search", verify, topicController.userSearch);

module.exports = router;