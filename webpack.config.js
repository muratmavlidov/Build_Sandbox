const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "mode": "development",

  module: {
    rules: [
      //  js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      //
      // Fonts
      //
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      //
      // Css
      //
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      //
      // SASS/SCSS
      //
      {
        test: /\.(s[ca]ss)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Build Sandbox',
      buildTime: new Date().toString(),
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash:8].css'
    })
  ],

  devServer: {
    open: true,
    
  }
};