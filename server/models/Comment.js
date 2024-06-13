const { Schema, default: mongoose } = require("mongoose");

const CommentSchema = new Schema({
    createdBy: String,
    content: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
}, {
    timestamps: true,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;