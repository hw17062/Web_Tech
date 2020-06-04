var express = require('express');
var router = express.Router();
var path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', homePage  );

function homePage(req, res, next){
  //res.sendFile(path.join(__dirname, '../public/home.html');
  res.sendFile('home.html', { root: '/home/hobie/Documents/Web_Tech/site/Web_Tech/Express_Server/public'});
}

module.exports = router;
