var express = require('express');
var router = express.Router();

var api_controller = require('../controller/apiController');

/* random */
// router.get('/firstapi', api_controller.first)

router.get('/firstapi', api_controller.first);

module.exports = router;