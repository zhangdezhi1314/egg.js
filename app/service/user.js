const Service = require('egg').Service;


class UserService extends Service {
    
    async getUserList() {
        let result = await this.ctx.model.User.find();
        return result;

    }
}

module.exports = UserService;
