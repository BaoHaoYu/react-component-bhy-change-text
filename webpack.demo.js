const resolve = require('path').resolve;
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './demo/index.js'
    ],

    output: {
        // 输出文件名
        filename: 'demo.js',

        // 输出目录
        path: resolve(__dirname, '__test__/src'),

        // 配置sourceMap
        devtoolModuleFilenameTemplate(info) {
            return "file:///" + info.absoluteResourcePath.replace(/\\/g, '/');
        }
    },

    devtool: 'source-map',

    watch: true,

    devServer: {
        // 是否开启热插拔
        hot: true,

        // 公共文件夹，可以通过浏览器请求获得里面的资源
        contentBase: resolve(__dirname),

        // *.hot-update.json 所在目录
        publicPath: '/__test__/src',

        //
        port: 8088
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /(node_modules|bower_components)/,
            },
            {
                // 使用css-module
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')({browsers: 'last 10 versions'})
                                ];
                            }
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ],
    },
};