
var express = require('express');
const PostController = require('../controllers/PostController');
var router = express.Router();

router.get('/posts', PostController.getAllPosts);

module.exports = router;