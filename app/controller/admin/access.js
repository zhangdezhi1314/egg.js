'use strict';

const BaseController = require('./base');

class   AccessController extends BaseController {
      async index() {
            await this.ctx.render('admin/access/index');

      
      }

      async add() {
            let result = await this.ctx.model.Access.find({'module_id':'0'});
           
            await this.ctx.render('admin/access/add',{
                  list:result
            });

      }

      async doAdd() {
            let result = this.ctx.request.body;
            
            let access = new this.ctx.model.Access(result)
            access.save();

      
            await this.success('/admin/access','增加权限成功');


      }

      async edit() {
            this.ctx.body = '编辑权限';

      }

 


  
}

module.exports = AccessController;
