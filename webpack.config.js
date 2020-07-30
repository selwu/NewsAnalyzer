const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    index: './src/pages/index/index.js' ,
    about: './src/pages/about/about.js' ,
    paper: './src/pages/paper/paper.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/i,
        use:  [
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|gif|ico|svg|webp|jpe?g)$/,
        use: [
          'file-loader?name=./images/[name].[ext]&esModule=false',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default'],
        },
        canPrint: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: './src/pages/index/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['paper'],
      template: './src/pages/paper/paper.html',
      filename: 'paper.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
      template: './src/pages/about/about.html',
      filename: 'about.html'
    }),
    new WebpackMd5Hash()
  ]
};
