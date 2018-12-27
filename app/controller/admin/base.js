'use strict';

const Controller = require('egg').Controller;
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



}

module.exports = BaseController;