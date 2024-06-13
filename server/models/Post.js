const { Schema, default: mongoose } = require("mongoose");

const PostSchema = new Schema({
    title: String,
    content: String,
    createdBy: String,
    likes: Number,
    bookmarks: Number,
    tags: [String],
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;