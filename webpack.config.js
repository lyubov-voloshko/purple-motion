/**
 * Created by macbook11 on 10/12/17.
 */

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    devtool: "sourcemap",
    entry: [
        './javascript/main.jsx',
        './stylesheets/allstyles.scss',
        '../node_modules/reset-css/_reset.scss'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};