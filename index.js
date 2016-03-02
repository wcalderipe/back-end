var restify = require('restify');

var server = restify.createServer({
  name: 'VamosJuntas',
});

server.listen(8080, function(){
	console.log('Hello World! :D');
});