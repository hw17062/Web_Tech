/**
 * The purpose of this middleware is to have the `user`
 * object available for all views.
 *
 * This is important because the user is used in layout.pug.
 */
module.exports = function () {
  return function (req, res, next) {
    if (req.user && req.session){
      console.log("found user, updating session");
      req.session.username = req.user.nickname;
      req.session.email = req.user.displayName;
    }
    //  res.locals.session = req.session;
    next();
  };
};
