var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var secured = require('../lib/middleware/secured');
var cookieParser = require('cookie-parser');


/* GET users listing. */
router.get('/hub',secured(), function(req, res, next) {

  res.sendFile('hub.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;
