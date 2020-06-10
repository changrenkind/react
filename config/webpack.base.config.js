const utils = require("./utils");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const devMode = process.env.NODE_ENV !== 'production';
const happypack = require('happypack');
const os = require('os');
const happyThreadPool = happypack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 入口
  entry: {
    app: "./src/index"
  },
  // 出口
  output: {
    path: resolve("dist"),
    filename: utils.assetsPath("js/[name].[hash].js"),
    chunkFilename: utils.assetsPath("js/[name].[chunkhash].js"),
    publicPath: "/" // 打包后的资源的访问路径前缀
  },
  resolve: {
    extensions: ['.js', '.json', 'jsx'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
    modules: [
      resolve('src'),
      resolve('node_modules'),
      resolve('build'),
    ],
    alias: {
      '@': resolve('src') // 在项目中使用@符号代替src路径，导入文件路径更方便
    }
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        include: path.join(__dirname, '../src'),
        exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
        use: [
          {
            loader: 'happypack/loader?id=babelLoader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // 创建 <style></style>
          },
          {
            loader: 'css-loader',  // 转换css
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          {
            loader: 'less-loader', // 编译 Less -> CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [resolve('static'), resolve('src')],
        options: {
          limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        include: [resolve('static'), resolve('src')],
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],

    splitChunks: {
      // chunks: 'all',
      // name: false,
      // async表示只从异步加载得模块（动态加载import()）里面进行拆分
      // initial表示只从入口模块进行拆分
      // all表示以上两者都包括
      chunks: "all",
      minSize: 34000,   // 大于30k会被webpack进行拆包
      minChunks: 1,     // 被引用次数大于等于这个次数进行拆分
      // import()文件本身算一个
      // 只计算js，不算css
      // 如果同时有两个模块满足cacheGroup的规则要进行拆分，但是maxInitialRequests的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来
      maxAsyncRequests: 5,  // 最大的按需加载（异步）请求次数
      // 最大的初始化加载请求次数,为了对请求数做限制，不至于拆分出来过多模块
      // 入口文件算一个
      // 如果这个模块有异步加载的不算
      // 只算js，不算css
      // 通过runtimeChunk拆分出来的runtime不算在内
      // 如果同时又两个模块满足cacheGroup的规则要进行拆分，但是maxInitialRequests的值只能允许再拆分一个模块，那尺寸更大的模块会被拆分出来
      maxInitialRequests: 5,
      automaticNameDelimiter: '~', // 打包分隔符
      name: true,
      cacheGroups: {
        // 拆分antd
        antdui: {
          priority: 2,
          test: /[\\/]node_modules[\\/](antd)[\\/]/,  //(module) => (/antd/.test(module.context)),
        },
        // 拆分基础插件
        basic: {
          priority: 3,
          test: /[\\/]node_modules[\\/](moment|react|react-dom|react-router|react-router-dom|mobx|mobx-react|axios)[\\/]/,
        },
        // 默认的配置
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        // 默认的配置
        default: {
          minChunks: 2, // 引用超过两次的模块 -> default
          priority: -20,
          reuseExistingChunk: true
        },
      },
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: utils.resolve('static'),  // 从哪个目录copy
        to: "static", // copy到那个目录
        ignore: ['.*']
      }
    ]),

    new happypack({
      id: 'babelLoader',
      use: ['babel-loader', 'eslint-loader'],
      //共享进程池
      threadPool: happyThreadPool,
    }),

    new MiniCssExtractPlugin({
      // filename: devMode ? '[name].css' : '[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      filename: devMode ? utils.assetsPath('css/[name].css') : utils.assetsPath('css/[name].[contenthash:8].css'),
      chunkFilename: devMode ? utils.assetsPath('css/[name].chunk.css') : utils.assetsPath('css/[name].[contenthash:8].chunk.css')
    })
  ]
}
