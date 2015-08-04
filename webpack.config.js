var webpack = require('webpack')

module.exports = {
    entry: [
        "./js/main.js"
    ],
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}
