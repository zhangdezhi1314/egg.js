'use strict';

const Controller = require('egg').Controller;
class   RoleController extends Controller {
  async index() {
        this.ctx.body = '角色列表'
     
  }

  async add() {
        this.ctx.body = '角色增加';

  }

  async edit() {
        this.ctx.body = '编辑角色理员';

  }

  async delete() {
        this.ctx.body = '角色的删除';
        
  }


  
}

module.exports = RoleController;
