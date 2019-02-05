const path = require('path');
const proxy = require('./proxy.conf.json');

module.exports = {
  mode: 'development',
  devServer: {
    https: false,
    host: '0.0.0.0', // <- this is important if running inside docker container
    contentBase: path.join(__dirname, 'dist'),
    clientLogLevel: 'info',
    compress: false,
    port: 80, // <- port should be exposed by docker container 80/443
    disableHostCheck: true, // <- prevents 0.0.0.0 being flagged as invalid
    proxy: proxy
  }
};