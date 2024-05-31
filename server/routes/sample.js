var express = require('express');
const SampleController = require('../controllers/SampleController');
var router = express.Router();

router.get('/user', SampleController.getAllUser);
router.post('/user/add', SampleController.addUser);

module.exports = router;
