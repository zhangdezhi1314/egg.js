'use strict';

const Controller = require('egg').Controller;

class   BaseController extends Controller {
    async success(redirectUrl,message) {
        await this.ctx.render('admin/public/success',{
            redirectUrl:redirectUrl,
            message:message || '操作成功!'

        });
        
    }

    async error(redirectUrl,message) {
        await this.ctx.render('admin/public/error',{
            redirectUrl:redirectUrl,
            message:message || '操作失败!'
        });

    }

    async verify() {
      
      let captcha = await this.service.tools.captcha();
      this.ctx.response.type = 'image/svg+xml';
      this.ctx.body = captcha.data;
      
    }

    async delete() {
        let result = this.ctx.request.query;
        let model = result.model;
        let id = result.id;

        await this.ctx.model[model].deleteOne({'_id':id});
        this.ctx.redirect(this.ctx.state.prevPage);
        
    }

}

module.exports = BaseController;