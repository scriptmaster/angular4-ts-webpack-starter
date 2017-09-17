var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        'app': './src/app.js'
    },
    output: {
        filename: './public/[name].js'
    },

    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        })
    ]
};
