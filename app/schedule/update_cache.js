const Subscription = require('egg').Subscription;
class UpdateCache extends Subscription {
    static get schedule() {
        return {
            interval:'1m',
            type:'all'
        }
    }
    async subscribe() {
        let res = await this.ctx.curl('http://www.api.com/cache',{
            dataType:'json'
        });

        this.ctx.app.cache = res.data;

    }
}

module.exports = UpdateCache;

