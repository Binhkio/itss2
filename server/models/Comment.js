const { Schema, default: mongoose } = require("mongoose");

const CommentSchema = new Schema({
    name: String,
    user_name: String,
    time_created: String,
    parent_id: Number
}, {
    timestamps: true,
});

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;