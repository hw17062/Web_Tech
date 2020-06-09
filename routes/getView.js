var express = require('express');
var router = express.Router();
var secured = require('../lib/middleware/secured');
const fs = require('fs');
var cookieParser = require('cookie-parser');
var path = require('path');
var util = require('util');


router.get('/',secured(), function(req, res, next) {
    fs.readFile(path.join(__dirname, '../userStore/userSettings/' + req.session.configFile + ".config"), function (err, file){
      if (err) {
        if (err.code === 'ENOENT') {
          console.error('myfile does not exist');
          return;
        }

        throw err;
      }
      var view = util.format('%s', file);
      res.send(view);
    });
});

module.exports = router;
