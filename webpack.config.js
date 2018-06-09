const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './es6/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'es6')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    }
};