var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vamosjuntas');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
});

var riskSchema = mongoose.Schema({
    address: String,
    longitude: Number,
    latitude: Number
});

module.exports = mongoose.model('Risk', riskSchema);
