'use strict';

const BaseController = require('./base');

class   RoleController extends BaseController {
    async index() {

        let result = await this.ctx.model.Role.find();
      
        await this.ctx.render('admin/role/index',{
            list:result
        });
        
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
        let id = this.ctx.query.id;
        let result = await this.ctx.model.Role.find({'_id':id})

        await this.ctx.render('admin/role/edit',{
            list:result[0]
        });

    }

    async doEdit() {
        let result = this.ctx.request.body;

        let id = result._id;
        let title = result.title;
        let description = result.description;

        let res = await this.ctx.model.Role.updateOne({'_id':id},{title,description});

        if(res.ok){
            await this.success('/admin/role','编辑角色成功');

        }


    }

  


  
}

module.exports = RoleController;
