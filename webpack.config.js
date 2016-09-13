const PATH = require('path');
const APP_DIR = PATH.resolve(__dirname, './app');
const BUILD_DIR = PATH.resolve(__dirname, './app/public');
const ASSET_DIR = PATH.resolve(__dirname, './app/assets');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

module.exports = {
    entry: APP_DIR + "/index.js",
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css", include: ASSET_DIR},
            { test: /\.jsx?$/, loader: 'babel?cacheDirectory', include: APP_DIR }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
