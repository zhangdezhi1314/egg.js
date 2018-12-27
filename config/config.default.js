'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545701230372_4435';

  // add your config here
  config.middleware = ['auth'];

  //配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
      '.nj': 'nunjucks',
    },
  };

  //配置session
  config.session = {
      key:'SESSION_ID',
      maxAge:864000,
      httpOnly:true,
      encrypt:true,
      renew:true

  }

 //配置数据库连接
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/cms',
      options: {},
    },
  };

  return config;
};
