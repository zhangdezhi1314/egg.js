'use strict';

const Service = require('egg').Service;
const url = require(url);


class  AdminService extends Service {
    async checkAuth() {
        //获取当前用户角色
        let userInfo = this.ctx.session.userInfo;
        let role_id = userInfo.role_id;
        let pathname = url.parse(ctx.request.url).pathname;


        //忽略权限的地址
        let ignoreUrl = ['/admin/login','/admin/doLogin','/admin/verify'];

        if(ignoreUrl.indexOf(pathname)!=-1 || userInfo.is_supper==1){
            return true;

        }


        //根据角色获取当前用户权限列表
        let accessResult = await this.ctx.model.RoleAccess.find({'role_id':role_id});
        let accessArray = [];
        for(let i=0;i<accessResult.length;i++){
            accessArray.push(accessResult[i].access_id.toString());

        }


        //获取当前url对应的id
        
        let accessUrlResult = await this.ctx.model.Access.find({'url':pathname});

        if(accessUrlResult){
            if(accessArray.indexOf(accessUrlResult._id.toString())!=-1){
                return true;

            }
            return false;
        }

      







    }

  
}

module.exports = AdminService;
