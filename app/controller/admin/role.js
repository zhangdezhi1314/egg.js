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

    async auth() {
        let id = this.ctx.query.id;

        //获取当前用户所有权限
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
        ]);

        //查询当前角色拥有那些权限
        let accessResult = await this.ctx.model.RoleAccess.find({'role_id':id});

        let roleAccessArray = [];
        for(let i=0;i<accessResult.length;i++){
            roleAccessArray.push(accessResult[i].access_id.toString());

        }


        for(let i=0;i<result.length;i++){
            if(roleAccessArray.indexOf(result[i]._id.toString())!=-1){
                result[i].checked = true
            }
            for(let j=0;j<result[i].items.length;j++){
               if(roleAccessArray.indexOf(result[i].items[j]._id.toString())!=-1){
                   result[i].items[j].checked = true;

               }

            }
        }

        



        await this.ctx.render('/admin/role/auth',{
            list:result,
            id:id
        });

    }

    async doAuth(){
        let result = this.ctx.request.body;
        let role_id = result.role_id;
        let access_node = result.access_node;


        //删除当前角色下的所有权限
        await this.ctx.model.RoleAccess.deleteMany({'role_id':role_id});

    
        
        //获取当前角色与权限添加到数据库中
        for(let i=0;i<access_node.length;i++){

            let roleAccessData = new this.ctx.model.RoleAccess({
                role_id:role_id,
                access_id:access_node[i]
            })

            roleAccessData.save();
            await this.success('/admin/role?id='+role_id,'授权成功');


        }
    }


}

module.exports = RoleController;
