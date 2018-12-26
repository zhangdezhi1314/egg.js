'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
     this.ctx.body = '首页'
     
  }

  async user() {

    let result = await this.service.user.getUserList();
    console.log(result);


    this.ctx.body = '我是用户页面';

  }

  async add() {
   
    let user = new this.ctx.model.User({
      username:'zhangdezhi',
      password:'123456',
      status:'2'
    })

    let result = await user.save();

    console.log(result);


    this.ctx.body = '增加用户成功';


  }
}

module.exports = HomeController;

