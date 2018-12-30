const url = require('url');

module.exports = options => {
    return async function admin(ctx,next) {
         //设置全局变量
        ctx.state.csrf = ctx.csrf;
        ctx.state.prevPage = ctx.request.headers['referer']

        let pathname = url.parse(ctx.request.url).pathname;

        if(ctx.session.userInfo){
            //设置全局变量
            ctx.state.userInfo = ctx.session.userInfo;
            let hasAuth = ctx.service.admin.checkAuth();


            if(hasAuth){
                await next();

            } else {
                await this.error('/admin/login','你没有权限访问');

            }

          

        } else {
            if(pathname == '/admin/login' || pathname == '/admin/doLogin' || pathname == '/admin/verify'){
                await next();

            } else {
                ctx.redirect('/admin/login');

            }
        }

        
    }
}