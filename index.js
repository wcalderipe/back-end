var restify = require('restify');

var server = restify.createServer({
  name: 'VamosJuntas',
});

server.get('/risks-around',function (request, response, next) {
  response.send('');
  next();
})

server.listen(8080, function(){
	console.log('Hello World! :D');
});
