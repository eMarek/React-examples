module.exports = {
    entry: "./js/Main.js",
    output: {
        filename: "./public/js/js-build.js"
    },
    module: {
        loaders: [{
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}