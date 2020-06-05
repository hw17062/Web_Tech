
module.exports = function (app) {
  app.get('/', require('./auth'));
  app.get('/', require('./index'));
  app.get('/', require('./users'));
};
