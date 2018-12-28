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

  async doAdd() {
        let result = this.ctx.request.body;
        let username = result.username;
        let password = result.password;
        let mobile  = result.mobile;
        let email = result.email;
        let role_id = result.role_id;

        let newPassword = this.service.tools.md5(password);


        let adminResult = await this.ctx.model.Admin.find({'username':username});

        if(adminResult.length > 0){
            await this.error('/admin/manager/add','管理员以存在');

        } else {
            let admin = new this.ctx.model.Admin({
                username,
                newPassword,
                mobile,
                email,
                role_id, 
            });

            await admin.save();
            await this.success('/admin/manager','增加管理员成功');


        }

  }

  async edit() {
      await this.ctx.render('admin/manager/edit');
      

  }



  
}

module.exports = ManagerController;
