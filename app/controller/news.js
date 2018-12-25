
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {

      this.ctx.status = 301;
      this.ctx.redirect('/shop');

    }
}

module.exports = NewsController;



