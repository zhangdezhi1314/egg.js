'use strict';

const Controller = require('egg').Controller;
class   AccessController extends Controller {
  async index() {
        this.ctx.body = '权限列表'
     
  }

  async add() {
        this.ctx.body = '权限增加';

  }

  async edit() {
        this.ctx.body = '编辑权限';

  }

  async delete() {
        this.ctx.body = '删除权限';
        
  }


  
}

module.exports = AccessController;
