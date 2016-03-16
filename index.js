var restify = require('restify');
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

server.listen(8080, function() {
	console.log('Hello World! :D');
});
