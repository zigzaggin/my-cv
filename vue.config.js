module.exports = {
    publicPath: "my-cv",
    css: {
        loaderOptions: {
            sass: {
                data: `@import 'public/_variables.scss';`
            }
        }
    }
};