


module.exports = function () {
  return function (req, res, next) {
    if (req.user && req.session && !req.session.configFile){
      var getUser = require('../scripts/dbAPI/get_user')(req);
    }
    res.locals.session = req.session;
    next();
  };
};
