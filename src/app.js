var restify = require('restify');
var database = require('./db.connection');
var risk = require('./services/risk');
var port = process.env.VAMOS_JUNTAS_PORT || 8080;

module.exports = {
  start: function () {

    var server = restify.createServer({
      name: 'VamosJuntas'
    });

    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    server.get('/risks-around', risk.risksAround);
    server.post('/risk', risk.createRisk);

    server.listen(port, function() {
      database.open();
    	console.log('Vamos Juntas Start :D');
    });
  }
};
