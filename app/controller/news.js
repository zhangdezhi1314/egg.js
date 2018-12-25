const Controller = require('egg').Controller;

class HomeController extends Controller {
    async list() {
        this.ctx.body = 'hello';
        
      }

    
}

module.exports = HomeController;

