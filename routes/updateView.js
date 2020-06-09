var express = require('express');
var router = express.Router();
var secured = require('../lib/middleware/secured');
const fs = require('fs');
var cookieParser = require('cookie-parser');
var path = require('path');


router.post('/',secured(), function(req, res, next) {
  let newView = req.cookies.view.toString();
  let loc = path.join(__dirname,'../userStore/userSettings/', req.session.configFile +'.config');
  console.log(loc);
  // console.log(newView.toString());
  fs.writeFile(loc, newView, function (err) {
    if (err){
      console.log(err);
      throw err;
    }
    console.log("file saved");
    req.session.config = newView;

  });
});

module.exports = router;
