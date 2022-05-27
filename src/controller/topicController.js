import Topic from "../models/topic";
import User from "../models/users";

class itemController {
    static createTopic = async(req, res) => {
        const newTopic = new Topic({
            name: req.body.name.trim(),
            category: req.body.category.trim(),
            user: req.user._id,
        });
        await newTopic.save();
        res.status(200).send(newTopic);
    };

    static allTopics = async(req, res) => {
        const topics = await Topic.find({});
        res.status(200).send(topics);
    };

    static findTopic = async(req, res) => {
        const topic = await Topic.findById(req.params.id);
        res.status(200).send(topic);
    };

    static findTopicByName = async(req, res) => {
        const topic = await Topic.findOne({ name: req.params.name });
        res.status(200).send(topic);
    };

    static findTopicByCategory = async(req, res) => {
        const topic = await Topic.findOne({ category: req.params.category });
        res.status(200).send(topic);
    };

    static findTopicByNameAndCategory = async(req, res) => {
        const topic = await Topic.findOne({ name: req.params.name, category: req.params.category });
        res.status(200).send(topic);
    };

    static addSubItem = async(req, res) => {
        const topic = await Topic.findById(req.params.id);
        topic.subItem.push(req.body);
        await topic.save();
        res.status(200).send(topic);
    };
    static searchSubItem = async(req, res) => {
        const topic = await Topic.findById(req.params.id);
        const subItem = topic.subItem.filter((item) => item.name === req.params.name);
        res.status(200).send(subItem);
    };

    static findTopicByDate = async(req, res) => {
        const topic = await Topic.find({ createDate: req.params.date });
        res.status(200).send(topic);
    };

    static findTopicByUser = async(req, res) => {
        const topic = await Topic.find({ user: req.params.user });
        res.status(200).send(topic);
    };

    static findYourOwnTopic = async(req, res) => {
        const topic = await Topic.find({ user: req.user._id });
        res.status(200).send(topic);
    };

    static mainSearch = async(req, res) => {
        let data = await Topic.find({
            $or: [{ name: { $regex: req.body.key } }, { category: { $regex: req.body.key } }],
        });
        res.status(200).send(data);
    };

    static userSearch = async(req, res) => {
        let data = await User.find({ $or: [{ name: { $regex: req.body.key } }] });
        res.status(200).send(data);
    };
}

export default itemController;