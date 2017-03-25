/**
 * Created by cervantes on 16/09/16.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/dist/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false 
    },

    plugins: [
        new TypedocWebpackPlugin({
            name: 'Documentation',
            mode: 'file',
            theme: 'default',
            out: '../docs',
            includeDeclarations: false,
            ignoreCompilerErrors: true
        }),
    ]
});
