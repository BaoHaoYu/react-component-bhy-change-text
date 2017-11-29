const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            // 必须库
            'react',
            'react-dom',
            'immutable',
            'immutable/contrib/cursor',
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader',
                ],
            }
        ]
    },

    devtool: 'source-map',

    output: {
        path: path.join(__dirname, '__test__/dll'),
        filename: '[name].dll.js',
        /**
         * output.library
         * 将会定义为 window.${output.library}
         * 在这次的例子中，将会定义为`window.vendor_library`
         */
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname, '__test__/dll', '[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。
             */
            name: '[name]_library'
        }),

        //压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
};

