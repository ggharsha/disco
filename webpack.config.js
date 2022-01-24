const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/disco.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.(png|jpg|svg|gif|mp3)$/,
                type: 'asset/ resource'
            },
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};

