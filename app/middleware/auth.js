module.exports = () => {
    return async function date(ctx,next) {
        ctx.state.csrf = ctx.csrf;
        await next();
        

    }
}



