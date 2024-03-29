const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: env,
    devtool: '#eval-source-map',

    entry: ['react-hot-loader/patch', 'webpack/hot/dev-server', 'webpack-hot-middleware/client', './src/index'],

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
           filename: 'index.html',
           template: 'src/index.ejs',
           hash: true,
           inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        })
    ],
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '@components': path.resolve(__dirname, 'src/js/components')
      }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: env,
                        },
                    },
                    'css-loader'
                ],
            },
        ],
    },
};