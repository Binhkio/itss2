
var express = require('express');
const PostController = require('../controllers/PostController');
var router = express.Router();

router.get('/posts', PostController.getAllPosts);
router.post('/posts/add', PostController.addPost);
module.exports = router;