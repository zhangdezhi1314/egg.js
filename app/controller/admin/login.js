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
      

      if(code.toUpperCase() == this.ctx.session.code.toUpperCase()){
          let result = await this.ctx.model.Admin.find({"username":username,"password":newPassword});
          if(result.length > 0){
              this.ctx.session.userInfo = result[0];
              this.ctx.redirect('/admin/manager');

          } else {
            await this.error('/admin/login','用户名或密码不正确!');
          }
          


      } else {
          await this.error('/admin/login','验证码不正确!');

      }
  }

  //退出登录
  async loginOut() {
      this.ctx.session.userInfo = null;
      this.ctx.redirect('/admin/login');
  }

}

module.exports = LoginController;
