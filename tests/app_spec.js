var restify = require('restify');

describe('App', function () {
  var server;
  var app = require('../src/app');

  beforeEach(function () {
    server = createSpyObj('server', ['get', 'listen', 'use']);
    spyOn(restify, 'createServer').andReturn(server);
    spyOn(restify, 'queryParser').andReturn(jasmine.any(Function));
  });

  describe('start', function () {
    it('should call server use',function() {
      app.start();
      expect(server.use).toHaveBeenCalled();
    });

    it('should call server listen', function () {
      app.start();
      expect(server.listen).toHaveBeenCalled();
    });
  });
});
