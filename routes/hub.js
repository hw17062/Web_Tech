var express = require('express');
var router = express.Router();
var path = require('path');
var secured = require('../lib/middleware/secured');


/* GET users listing. */
router.get('/hub',secured() function(req, res, next) {
  res.sendFile('hub.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;
