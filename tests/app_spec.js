var restify = require('restify');
var place = require('../src/place.model');

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

    it('should call server get', function () {
      app.start();
      expect(server.get).toHaveBeenCalled();
    });
  });

  describe('/risks-around', function () {
    var risks;
    
    beforeEach(function() {
      var mongoResponse = createSpyObj('mongoResponse', ['exec']);
      spyOn(place, 'find').andReturn(mongoResponse);
      app.start();
      risks = server.get.mostRecentCall.args[1];
    });

    it('should call mongo with the correct parameters',function() {
      var request = {
        params: {
          longitude: 1.2,
          latitude: 3.4
        }
      };
      risks(request, null);

      expect(place.find).toHaveBeenCalledWith({
        loc: {
          $near: [1.2, 3.4],
          $maxDistance: 100
        }
      });
    });
  });
});
