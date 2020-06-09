
module.exports = function (app) {
  app.use('/', require('./auth'));
  app.use('/', require('./index'));
  app.use('/', require('./hub'));
  app.use('/geticon', require('./getIcon'));
};
