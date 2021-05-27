const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },

    entry: {
        main: path.resolve(__dirname, './src/server.ts')
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                // test: /\.js$/,
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                // use: ['babel-loader'],
            }
        ]
    },
}