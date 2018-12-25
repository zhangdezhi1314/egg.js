'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
     this.ctx.body = 'hello egg.js';

  }

  async change() {
    this.ctx.body = 'hello home';

  }
}

module.exports = HomeController;

