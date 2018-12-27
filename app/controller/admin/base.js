'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
class   BaseController extends Controller {
    async success(redirectUrl) {
        await this.ctx.render('admin/public/success',{
            redirectUrl:redirectUrl
        });
        
    }

    async error(redirectUrl) {
        await this.ctx.render('admin/public/error',{
            redirectUrl:redirectUrl
        });

    }

    async verify() {
      let captcha = svgCaptcha.create({
          size:6,
          fontSize:50,
          width:130,
          height:32,
          background:'#f60'
      });

      this.ctx.session.code = captcha.text;
      this.ctx.response.type = 'image/svg+xml';
      this.ctx.body = captcha.data;
      
    }

}

module.exports = BaseController;