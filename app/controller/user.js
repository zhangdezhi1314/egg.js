'use strict';

// const BaseController = require('../core/base.js');
const BaseController = require('../core/base');


class UserController extends BaseController {
  async login() {
     await this.ctx.render('login');
     
  }
  async register() {
    await this.ctx.render('regester');

  }

  async doLogin() {
    await this.success('/');

  }

  async doRegister() {
    await this.error('/');

  }
}

module.exports = UserController;

