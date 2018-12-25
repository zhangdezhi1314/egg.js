
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
      this.ctx.body = '哈哈呀呢';

    }
}

module.exports = NewsController;



