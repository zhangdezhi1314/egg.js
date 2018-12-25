'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async login() {
     await this.ctx.render('login');
     
  }
  async register() {
    await this.ctx.render('regester');

  }
  async doLogin() {
    await this.ctx.render('public/success');


  }
  async doRegister() {
    await this.ctx.render('public/error');
    

  }
}

module.exports = HomeController;

