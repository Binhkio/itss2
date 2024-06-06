const Question = require('../models/QuestionModel');

const addQuestion = async (req, res) => {
    const { title, content, tags } = req.body;
    if (!title || !content) {
        return res.status(304).json({ message: "Field required" });
    }
    const question = new Question({ title, content, tags });
    await question.save();
    return res.status(200).json({ message: "Add question success" });
}

const getAllQuestion = async (req, res) => {
    const data = await Question.find().exec();
    return res.status(200).json({ message: "Get all question successed", data: data });;
}

const QuestionController = {
    addQuestion,
    getAllQuestion,
}

module.exports = QuestionController;
