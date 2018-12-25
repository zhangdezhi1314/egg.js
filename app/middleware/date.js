module.exports = () => {
    return async function date(ctx,next) {
        let date = new Date();
        console.log(date.getFullYear());
        await next();

    }
}

