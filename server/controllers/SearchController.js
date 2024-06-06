const Sample = require('../models/SampleModel');

const searchUser = async (req, res) => {
    const { keyword } = req.query;
    if (!keyword || keyword.length > 100) {
        return res.status(400).json({ message: "Invalid keyword" });
    }

    const data = await Sample.find({
        $or: [
            { name: { $regex: keyword, $options: 'i' } },
            { email: { $regex: keyword, $options: 'i' } }
        ]
    }).exec();

    return res.status(200).json({ message: "Search succeeded", data: data });
}

const SearchController = {
    searchUser,
}

module.exports = SearchController;
