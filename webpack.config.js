const path = require('path');

module.exports = {
    mode: 'development',
    entry: './lib/storage/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};