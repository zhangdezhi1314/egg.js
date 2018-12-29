'use strict';

const BaseController = require('./base');
class ManagerController extends BaseController {
  async index() {

        let result = await this.ctx.model.Admin.aggregate([{
            $lookup:{
                from:'role',
                localField:'role_id',
                foreignField:'_id',
                as:'role'
            }
        }])

        
        await this.ctx.render('admin/manager/index',{
            list:result
        });
        
        
    }

    async add() {
        let userRole = await  this.ctx.model.Role.find();

        await this.ctx.render('admin/manager/add',{
            userRole:userRole
        });

    }

    async doAdd() {
            let admin = null;
            let result = this.ctx.request.body;
            let username = result.username;
            let password = result.password;
            let mobile  = result.mobile;
            let email = result.email;
            let role_id = result.role_id;

            let newPassword = await this.service.tools.md5(password);


            let adminResult = await this.ctx.model.Admin.find({'username':username});

            if(adminResult.length > 0){
                await this.error('/admin/manager/add','管理员以存在');

            } else {
                admin = new this.ctx.model.Admin({
                    username:username,
                    password:newPassword,
                    mobile:mobile,
                    email:email,
                    role_id:role_id, 
                });

                await admin.save();
                await this.success('/admin/manager','增加管理员成功');


            }

    }

    async edit() {

        
            let id = this.ctx.query.id;

            let adminResult = await this.ctx.model.Admin.find({'_id':id});


            let result = await this.ctx.model.Role.find();
            
            await this.ctx.render('admin/manager/edit',{
                list:result,
                adminResult:adminResult[0]
            });
        
    }


    async doEdit() {

        let result = this.ctx.request.body;
        let id = result.id;
        let password = result.password;
        let mobile = result.mobile;
        let email = result.email;
        let role_id = result.role_id;

        let newPasswoed = await this.service.tools.md5(password);


        if(password){
            await this.ctx.model.Admin.updateOne({'_id':id},{
                mobile:mobile,
                email:email,
                password:newPasswoed,
                role_id:role_id
            })
        } else {
            await this.ctx.model.Admin.updateOne({'_id':id},{
                mobile,
                email,
                role_id
            })
        }

        await this.success('/admin/manager','修改管理员成功');
        



    }

}

module.exports = ManagerController;
