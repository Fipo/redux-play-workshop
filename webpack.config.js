const path = require('path');

const config = {
  context: __dirname,
  entry: './src/App.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/',
    contentBase: './public',
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

console.log('NODE_ENV: ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.output.path = path.join(__dirname, 'build');
  config.output.filename = '[name].bundle.[chunkhash].js';
}

// TODO: check out https://simonsmith.io/organising-webpack-config-environments/

module.exports = config;
