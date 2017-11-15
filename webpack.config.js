
const path = require('path');
//const css = require('.webpack/css');

module.exports = {
    entry: "./source/index.js",
    output: {
        path:__dirname+ '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
          rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                options: { presets: ['es2015'] } 
            },
            {
                test: /\.css$/,                
                use: [
                        'style-loader',
                        'css-loader'
                ]
            }
          ]
        }

}




