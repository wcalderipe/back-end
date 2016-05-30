var restify = require('restify');
var database = require('../db.connection');
var controllers = require('../controllers');
var port = process.env.VAMOS_JUNTAS_PORT || 8080;

module.exports = {
  start: function () {

    var server = restify.createServer({
      name: 'VamosJuntas'
    });

    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    server.get('/risks-around', controllers.risksAround);
    server.post('/report-risk', controllers.reportRisk.addReportRisk);

    server.listen(port, function() {
      database.open();
    	console.log('Vamos Juntas Start :D');
    });
  }
};
