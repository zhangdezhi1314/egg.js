'use strict';

const Controller = require('egg').Controller;
class OrderController extends Controller {
  async index() {

    let orderResult = await this.ctx.model.User.find();
 

    this.ctx.body = orderResult

     
  }

  
}

module.exports = OrderController;

