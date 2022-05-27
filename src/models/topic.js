import mongoose from "mongoose";
const Schema = mongoose.Schema;

const topicShema = new Schema({
    name: {
        type: "string",
        required: true,
        min: 4,
        max: 20,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: "string",
        min: 2,
        max: 20,
    },
    subItem: [],

    createDate: {
        type: "date",
        default: Date.now(),
    },
});
const Topic = mongoose.model("Topic", topicShema);

export default Topic;