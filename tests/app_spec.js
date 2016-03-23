var app = require('../src/app');

var restify = require('restify');

describe('App', function () {
  var server;

  beforeEach(function () {
    server = createSpyObj('server', ['get', 'listen']);
    spyOn(restify, 'createServer').andReturn(server);
  });

  describe('start', function () {
    it('starts the server', function () {
      app.start();
  //    expect(server.listen).toHaveBeenCalled();
    });
  });
});
