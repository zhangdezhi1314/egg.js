'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async info() {
        this.ctx.body = 'inof';

    }
}

module.exports = IndexController;


