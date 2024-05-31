const Sample = require('../models/SampleModel');

const addUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(304).json({ message: "Field required" });
    }
    const sample = new Sample({ name, email });
    await sample.save();
    return res.status(200).json({ message: "Add user success" });
}

const getAllUser = async (req, res) => {
    const data = await Sample.find().exec();
    return res.status(200).json({ message: "Get all user successed", data: data });;
}

const SampleController = {
    addUser,
    getAllUser,
}

module.exports = SampleController;
