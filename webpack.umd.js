const resolve = require('path').resolve;
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        // 输出文件名
        filename: 'change-text.umd.js',

        libraryTarget: 'umd',

        // 输出目录
        path: resolve(__dirname, 'dist'),

        // 配置sourceMap
        devtoolModuleFilenameTemplate(info) {
            return "file:///" + info.absoluteResourcePath.replace(/\\/g, '/');
        }
    },

    target: 'node',
    externals: ['react', 'immutable', 'prop-types', 'react-component-bhy-base','immutable/contrib/cursor'],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options:{

                    }
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                // 使用css-module
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
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


    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
    ],
};