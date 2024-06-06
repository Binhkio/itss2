const { Schema, default: mongoose } = require("mongoose");

const PostSchema = new Schema({
    name: String,
    content: String,
    user_name: String,
    time_created: String,
    likes: Number,
    bookmarks: Number,
    tags: String,
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }
}, {
    timestamps: true,
});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = Posts;