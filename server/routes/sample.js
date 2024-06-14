var express = require('express');
const SampleController = require('../controllers/SampleController');
var router = express.Router();

router.get('/', (req, res) => {
return res.send("OK");
});

module.exports = router;
