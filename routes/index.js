var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.user) { res.redirect('/hub');}
  res.render('index');
});

module.exports = router;
