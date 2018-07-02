
module.exports = app => {
  const { router, controller } = app;
  // API
  // ================ 后台 ================
  // ------- 文章 -------
  
  app.get('/api/article/list', app.controller.app.list);
  app.get('/api/article/:id', app.controller.app.detail);
  app.get('/*', app.controller.app.index);
};
