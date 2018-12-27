const url = require('url');

module.exports = options => {
    return async function admin(ctx,next) {
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