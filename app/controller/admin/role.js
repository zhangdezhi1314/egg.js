'use strict';

const BaseController = require('./base');

class   RoleController extends BaseController {
    async index() {
        await this.ctx.render('admin/role/index');
        
    }

    async add() {
        await this.ctx.render('admin/role/add');


    }

    async doAdd() {
        let result = this.ctx.request.body;
        let title = result.title;
        let description = result.description;
        
        let role = new this.ctx.model.Role({
            title:title,
            description:description
        });

        let res = await role.save();


      if(!!res.title){
          await this.success('/admin/role','增加角色成功');

      } else {
          this.ctx.redirect('/admin/role/add');

      }

    }

    async edit() {
        await this.ctx.render('admin/role/edit');

    }

  


  
}

module.exports = RoleController;
