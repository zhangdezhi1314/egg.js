const url = require('url');

module.exports = options => {
    return async function admin(ctx,next) {
         //设置全局变量
        ctx.state.csrf = ctx.csrf;

        let pathname = url.parse(ctx.request.url).pathname;

        if(ctx.session.userInfo){
            await next();

        } else {
            if(pathname == '/admin/login' || pathname == '/admin/doLogin' || pathname == '/admin/verify'){
                await next();

            } else {
                ctx.redirect('/admin/login');

            }
        }

        
    }
}