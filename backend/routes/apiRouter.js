var express = require('express');
var router = express.Router();

var api_controller = require('../controller/apiController');

/* random */
// router.get('/firstapi', api_controller.first)

router.get('/allNotes', api_controller.allNotes);

router.get('/allUsers', api_controller.allUsers);

module.exports = router;