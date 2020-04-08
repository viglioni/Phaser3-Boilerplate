'use strict';

const webpack = require('webpack');
const path = require('path');
const nodeModules = './node_modules';

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build/',
        filename: 'project.bundle.js'
    },

    resolve: {
        alias: {
            boilerplate: path.resolve(__dirname, 'boilerplate/'),
            scenes: path.resolve(__dirname, 'src/scenes/'),
            assets: path.resolve(__dirname, 'assets/'),
            
        }
    },

    module: {
        rules: [
            { // transpile js using babel
                test: /\.js$/,
                exclude: [nodeModules],
                use: {
                    loader: 'babel-loader'
                }
            },
            { // loader for media files https://webpack.js.org/loaders/file-loader/
                test: /\.(png|jpg|gif|ico|svg|pvr|pkm|static|ogg|mp3|wav)$/,
                exclude: [nodeModules],
                use: ['file-loader'] 
            },
            { // loader to import files as a string https://webpack.js.org/loaders/raw-loader/
                test: [/\.vert$/, /\.frag$/],
                exclude: [nodeModules],
                use: 'raw-loader' 
            },
            { // load css as part of js bundle saving a request
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64]',
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
