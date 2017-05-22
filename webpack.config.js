"use strict";

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "./build/bundle": "./src/index.jsx"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};