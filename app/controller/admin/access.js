'use strict';

const BaseController = require('./base');

class   AccessController extends BaseController {
      async index() {
            let result = await this.ctx.model.Access.aggregate([
                  {
                        $lookup:
                              {
                                    from:'access',
                                    localField:'_id',
                                    foreignField:'module_id',
                                    as:'items'      
                              }      
                     },
                     {
                        $match:
                              {
                                    module_id:'0'
                              }
                     }
            ])


            await this.ctx.render('admin/access/index',{
                  list:result
            });

      
      }

      async add() {
            let result = await this.ctx.model.Access.find({'module_id':'0'});
           
            await this.ctx.render('admin/access/add',{
                  list:result
            });

      }

      async doAdd() {
            let result = this.ctx.request.body;
            let module_id = result.module_id;


            // //菜单或操作
            if(module_id!=0){
                  result.module_id = await this.app.mongoose.Types.ObjectId(module_id);
  
            } 

            let access = new this.ctx.model.Access(result);   
          
            access.save();
            
            await this.success('/admin/access','增加权限成功');


      }

      async edit() {

            let id = this.ctx.query.id;
            let data = await this.ctx.model.Access.find({'_id':id});


            let result = await this.ctx.model.Access.find({'module_id':'0'});

            await this.ctx.render('/admin/access/edit',{
                  list:result,
                  item:data[0]
            });


      }

      async doEdit() {
            let result = this.ctx.request.body;
            let id = result.id;
            let module_id = result.module_id;

            if(module_id!=0){
                  result.module_id = await this.app.mongoose.Types.ObjectId(module_id);

            }

            let update = await this.ctx.model.Access.updateOne({'_id':id},result);

            await this.success('/admin/access','编辑权限成功');


      }

 


  
}

module.exports = AccessController;
