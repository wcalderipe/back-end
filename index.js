var restify = require('restify');
var Risk = require('./risk.model');

var server = restify.createServer({
  name: 'VamosJuntas',
});

server.get('/risks-around',function (request, response) {
  Risk.find(function (err, risks) {
    if (err) {
      return console.error(err);
    }
    console.log(risks);
    return response.send(risks);
  });
})

server.listen(8080, function() {
	console.log('Hello World! :D');
});
