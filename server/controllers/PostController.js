const Comment = require("../models/Comment");
const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
    const posts = await Post.find().exec();
    return res.status(200).json({ message: "Get all posts successfully", data: posts });;
};

const addPost = async (req, res) => {
    const { title, content, tags } = req.body;
    if (!title || !content) {
        return res.status(304).json({ message: "Field required" });
    }
    const cmt = await Comment.insertMany([
        {
            content: "This is a sample comment",
            createdBy: "User 00",
        }
    ]);
    const post = new Post({ title, content, tags: tags || [], comment: cmt.map(c => c._id), likes: 0, bookmarks: 0 });
    await post.save();
    return res.status(200).json({ message: "Add question success!" });
}

const getPost = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(304).json({ message: "Field required" });
    }
    const post = await Post.findById(id);
    post.comment = await Promise.all(post.comment.map((cmt, idx) => {
        return Comment.findById(cmt);
    }))
    if (post) {
        return res.status(200).json(post);
    }
}

const PostController = {
    getAllPosts,
    addPost,
    getPost,
};

module.exports = PostController;