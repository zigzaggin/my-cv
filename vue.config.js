module.exports = {
    publicPath: "my-cv",
    css: {
        loaderOptions: {
            sass: {
                data: `@import 'public/_global.scss';`
            }
        }
    }
};