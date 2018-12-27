'use strict';

const BaseController = require('./base');
class   LoginController extends BaseController {
  async index() {
      await this.ctx.render('admin/login');
     
  }
  //执行登录的方法
  async doLogin() {
     
      let result = this.ctx.request.body;
      let code = result.code;
      let username = result.username;
      let password = result.password;

      let newPassword = await  this.service.tools.md5(password);
      


     

      if(code == this.ctx.session.code){
        
      } else {
          await this.error('/admin/login','验证码不正确!');

      }





  }

}

module.exports = LoginController;
