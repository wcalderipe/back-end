var restify = require('restify');
var database = require('./db.connection');
var Place = require('./place.model');

var server = restify.createServer({
  name: 'VamosJuntas',
});

server.get('/risks-around',function (request, response) {
  Place.find(function (err, places) {
    if (err) {
      return console.error(err);
    }
    console.log(places);
    return response.send(places);
  });
})

var start = function () {
  console.log('a');
  server.listen(8080, function() {
    database.open();
  	console.log('Hello World! :D');
  });
};

module.exports = {
  start: start
};
