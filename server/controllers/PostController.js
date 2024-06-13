const Post = require("../models/Post");

const getAllPosts = async(req, res) => {
    const posts = await Post.find().exec();
    return res.status(200).json({ message: "Get all posts successfully", data: posts });;
};

const addPost = async (req, res) => {
    const { title, content, tags } = req.body;
    if (!title || !content) {
        return res.status(304).json({ message: "Field required" });
    }
    const post = new Post({ title, content, tags });
    await post.save();
    return res.status(200).json({ message: "Add question success" });
}

const PostController = {
    getAllPosts,
    addPost
};

module.exports = PostController;