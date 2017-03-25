var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var chalk = require('chalk');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:1666/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),

        new WebpackNotifierPlugin({
            excludeWarnings: false
        }),

        new ProgressBarPlugin({
            format: chalk.green('Webpack loading:') +
            chalk.white(' [:bar] ') + chalk.green(':percent') + chalk.green(' (:elapsed seconds)')
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
