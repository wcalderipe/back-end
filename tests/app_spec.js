var restify = require('restify');

describe('App', function () {
  var server;
  var app;

  beforeEach(function () {
    server = createSpyObj('server', ['get', 'listen']);
    spyOn(restify, 'createServer').andReturn(server);
    app = require('../src/app');
  });

  describe('start', function () {
    it('starts the server', function () {
      app.start();
      expect(server.listen).toHaveBeenCalled();
    });
  });
});
