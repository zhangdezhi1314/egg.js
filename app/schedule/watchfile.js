const Subscription = require('egg').Subscription;
let i = 0;

class WatchFile extends Subscription {
    static get schedule() {
        return {
           interval:'5s',
           type:'all' 
        }
    }

    async subscribe() {
      

    }
}

module.exports = WatchFile;
