var express = require('express');
var router = express.Router();
var path = require('path');


/* GET users listing. */
router.get('/hub', function(req, res, next) {
  res.sendFile('hub.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;
