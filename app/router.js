'use strict';

/**
 * @param {Egg.Application} app - egg application
 */


module.exports = app => {
  const { router,controller } = app;
  const date = app.middleware.date();

  router.get('/',date,controller.home.index);
  router.get('/change',controller.home.change);
  router.get('/info',controller.home.info);
  router.get('/index', controller.index.info);

}
