var restify = require('restify');

var server = restify.createServer({
  name: 'VamosJuntas',
});

server.get('/risks-around',function (request, response, next) {
  response.send([{
    address: "Rua Ipiranga",
    long: "111122",
    lat: "222222",
    risks: 10
  }]);
  next();
})

server.listen(8080, function(){
	console.log('Hello World! :D');
});
