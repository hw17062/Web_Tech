
module.exports = function (app) {
  let session = require('express-session');
  const redis = require('redis')
  let RedisStore = require('connect-redis')(session);
  
  let redisClient = redis.createClient();


  var options = {
      store: new RedisStore({ client: redisClient }),
      port: 3306,
      secret: 'bR@Q6$i57%[5hKS64{!PoFaf}(KB',
      resave: false,
      saveUninitialized: true,
  };

  if (app.get('env') === 'production') {
    // If you are using a hosting provider which uses a proxy (eg. Heroku),
    // comment in the following app.set configuration command
    //
    // Trust first proxy, to prevent "Unable to verify authorization request state."
    // errors with passport-auth0.
    // Ref: https://github.com/auth0/passport-auth0/issues/70#issuecomment-480771614
    // Ref: https://www.npmjs.com/package/express-session#cookiesecure
    // app.set('trust proxy', 1);

    options.cookie.secure = true; // serve secure cookies, requires https
  }

  app.use(session(options));
};
