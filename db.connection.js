var mongoose = require('mongoose');

var open = function () {
  var connection;
  mongoose.connect('mongodb://localhost/vamosjuntas');
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
