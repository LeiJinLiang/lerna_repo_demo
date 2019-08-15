const path = require('path');
module.exports = (opt) =>({
    mode : 'production',
    entry: path.resolve(opt.path,'./lib/index.js'),
    output: {
        path : path.resolve(opt.path,'./dist'),
        filename: `${opt.name.replace('@ngm/','')}.min.js`,
        library:opt.name,
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
           {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(opt.path, './lib')],
                options: {
                    presets: ['@babel/preset-env']
                }
           }
        ]
    },
    externals: opt.externals,
    optimization: {
        minimize: true
    }
})