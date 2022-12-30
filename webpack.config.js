const path = require('path')

module.exports = {
    mode: 'production',
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: []
    },
}