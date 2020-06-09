
module.exports = function (app) {
  app.use('/', require('./auth'));
  app.use('/', require('./index'));
  app.use('/', require('./hub'));
  app.use('/geticon', require('./getIcon'));
  app.use('/updateView', require('./updateView'));
  app.use('/getView', require('./getView'));
};
