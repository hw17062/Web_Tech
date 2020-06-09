var express = require('express');
var router = express.Router();
var secured = require('../lib/middleware/secured');


router.get('/',secured(), function(req, res, next) {

  const webIconScraper = require('web-icon-scraper');


  let prom = function (url){return webIconScraper({
      url: url,
      sort: 'des',
      limit: 10,
      checkStatus: true,
      followRedirectsCount: 5
    }).then(output => {return output});
  };

  let result = prom(req.query.url);

  result.then( function(output){
    if (output.icons != null) res.send(output.icons[0].link);
  })

});

module.exports = router;
