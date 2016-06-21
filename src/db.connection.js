var configs = require('./configs')().mongodb;
var mongoose = require('mongoose');

var open = function(mode) {
  var connection;
  var configURI = 'mongodb://' + configs.host + '/' + configs.database;
  var connectionURI = process.env.MONGODB_URI || configURI;

  mongoose.connect(connectionURI);
  connection = mongoose.connection;
  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', console.log.bind(console, 'Connected'));
};

var close = function() {
  mongoose.disconnect();
};

module.exports = {
  open: open,
  close: close
};
