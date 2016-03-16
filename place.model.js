var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vamosjuntas');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
});

var placeSchema = mongoose.Schema({
    loc: {
      type: [Number],
      index: '2d'
    },
    address: String,
    reports: [
      {
        category: String,
        date: Date,
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
});

module.exports = mongoose.model('Place', placeSchema);
