var reportRisk = require('../../../../src/services/risk/report-risk.js');
var Place = require('../../../../src/place.model.js');
var mongoose = require('mongoose');
//var mockgoose = require('mockgoose');

describe('Create a new risk report', function () {
  var request;
  var response;
  var restifyMock;

  beforeEach(function() {
    restifyMock = {
      next: function(){},
      response: { json: function(){} },
      request: {}
    };
  });

  it('Should call response json',function() {
    spyOn(restifyMock.response, 'json');

    reportRisk(restifyMock.request, restifyMock.response, restifyMock.next);
    expect(restifyMock.response.json).toHaveBeenCalled();
  });

  it('Should call next after report creation',function() {
    spyOn(restifyMock, 'next');

    reportRisk(restifyMock.request, restifyMock.response, restifyMock.next);
    expect(restifyMock.next).toHaveBeenCalled();
  });

  it('Should search place mongoose',function() {
    reportRisk(request, response, restifyMock.next);
    expect(restifyMock.next).toHaveBeenCalled();
  });

  it('Should validate data before inserting new risk',function() {
  });

  it('Should create risk',function(done) {
    var requestJson = {
      "address": "Av. Ipiranga",
      "location": {
        "latitude": 10,
        "longitude": 20
      },
      "occurrences": [{
        "risk": "Roubo",
        "count": 1,
        "reports": [{
          "date": "10/10/2016",
          "period": "Manhã"
        }]
      }]
    };

    var promiseSave = reportRisk.create(requestJson);
    expect(promiseSave instanceof require('mpromise')).toBe(true);

    promiseSave.then(function() {
      expect(true).toBe(true);
      done();
    }).catch(function() {
      expect(true).toBe(false);
      done();
    });
  });

});
