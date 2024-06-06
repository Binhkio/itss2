const Posts = require("../models/Post");

const getAllPosts = async(req, res) => {
    const posts = await Posts.find().exec();
    return res.status(200).json({ message: "Get all posts successfully", data: posts });;
};

const PostController = {
    getAllPosts,
};

module.exports = PostController;