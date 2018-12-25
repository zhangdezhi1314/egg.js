'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545701230372_4435';

  // add your config here
  config.middleware = ['auth'];

  //配置模板引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'ejs',
    },
  };

  return config;
};
