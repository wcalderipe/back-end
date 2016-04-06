var restify = require('restify');
var database = require('./db.connection');
var services = require('./services');
var port = process.env.VAMOS_JUNTAS_PORT || 8080;

module.exports = {
  start: function () {
    var server = restify.createServer({
      name: 'VamosJuntas'
    });

    server.use(restify.queryParser());

    server.get('/risks-around', services.risksAround);

    server.listen(port, function() {
      database.open('test');
    	console.log('Vamos Juntas Start :D');
    });
  }
};
