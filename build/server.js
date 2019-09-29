

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');
const bundler = webpack(webpackConfig);
const path = require('path');

browserSync({
    server: {
        baseDir: 'src',
        publicPath: '/',
        port: 3000,
        historyApiFallback: true,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: { colors: true }
            }),

            webpackHotMiddleware(bundler)
        ]
    },

    // no need to watch '*.js' here
    files: ['src/css/*.css', 'src/*.html']
});
