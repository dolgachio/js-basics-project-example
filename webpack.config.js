const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
      main: './src/index.js',
      checkout: './src/index-checkout.js',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            { from: 'assets', to: 'assets' },
            { from: 'favicon.ico', to: 'favicon.ico' },
        ]),
        new HtmlWebpackPlugin({
            // Load a custom template (lodash by default)
            filename: 'index.html',
            template: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            // Load a custom template (lodash by default)
            filename: 'checkout.html',
            template: 'checkout.html',
            chunks: ['checkout']
        })
    ],
};