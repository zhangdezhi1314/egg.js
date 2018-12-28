'use strict';

const BaseController = require('./base');
class ManagerController extends BaseController {
  async index() {
      await this.ctx.render('admin/manager/index');
       
     
  }

  async add() {
      let userRole = await  this.ctx.model.Role.find();

      await this.ctx.render('admin/manager/add',{
          userRole:userRole
      });

  }

  async edit() {
      await this.ctx.render('admin/manager/edit');
      

  }

  async delete() {
        this.ctx.body = '管理员的删除';

  }


  
}

module.exports = ManagerController;
