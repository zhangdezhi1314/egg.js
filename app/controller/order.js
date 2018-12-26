'use strict';

const Controller = require('egg').Controller;
class OrderController extends Controller {
  async index() {
     this.ctx.body = '我是订单页面';
     
     
  }

  
}

module.exports = OrderController;

