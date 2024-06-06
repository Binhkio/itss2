const { Schema, default: mongoose } = require("mongoose");

const QuestionSchema = new Schema({
    title: String,
    content: String,
    tags: [String]
}, {
    timestamps: true,
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
