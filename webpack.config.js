var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    tachyons: 'tachyons/css/tachyons.css',
    index: './css/index.css'
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new CopyWebpackPlugin([{ from: 'index.html' }])
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-tff&name=fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=img/[name].[ext]'
      },
      {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=img/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=img/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

// get the mPopup
var mpopup = document.getElementById('mpopupBox');

// get the link that opens the mPopup
var mpLink = document.getElementById("mpopupLink");

// get the close action element
var close = document.getElementsByClassName("close")[0];

// open the mPopup once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
}

// close the mPopup once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
}

// close the mPopup when user clicks outside of the box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
}
