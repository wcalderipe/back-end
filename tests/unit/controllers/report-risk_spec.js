var reportRisk = require('../../../src/controllers/report-risk.js');
var jsonschema = require('jsonschema');
var schema = require('../../../src/controllers/schemas/risk.json');
var Place = require('../../../src/domains/place.model.js');

describe('Create a new risk report', function () {
  var isPromiseSuccess;
  var promise = {
    then: function(success, error) {
      if(isPromiseSuccess) {
        success();
      }
      error();
    }
  };;

  beforeEach(function() {
    restifyMock = {
      next: jasmine.createSpy(),
      response: jasmine.createSpyObj('response', ['send']),
      request: {
        params: {
          address: "Av. Ipiranga",
          location: {
            latitude: 10,
            longitude: 20
          },
          risk: "Roubo",
          date: "10/10/2016",
          period: "Manhã"
        }
      },
      invalidRequest: {
        params: {
          location: {
            latitude: 10,
            longitude: 20
          },
          risk: "Roubo",
          date: "10/10/2016",
          period: "Manhã"
        }
      },
      validPlaceStructure: {
        loc: [20, 10],
        address: "Av. Ipiranga",
        reports: [
          {
            category: "Roubo",
            date: "10/10/2016",
          }
        ]
      }
    };
    isPromiseSuccess = true;

    spyOn(Place, 'create').andReturn(promise);
  });

  it('should return 201 when all data is ok', function() {
    reportRisk.addReportRisk(restifyMock.request, restifyMock.response, restifyMock.next);
    expect(restifyMock.response.send).toHaveBeenCalledWith(201);
  });

  it('should return 400 when param address does not exists', function() {
    reportRisk.addReportRisk(restifyMock.invalidRequest, restifyMock.response, restifyMock.next);
    expect(restifyMock.response.send).toHaveBeenCalledWith(400);
  });

  it('should return 201 after validating with jsonschema', function() {
    spyOn(jsonschema, 'validate').andCallThrough();
    reportRisk.addReportRisk(restifyMock.request, restifyMock.response, restifyMock.next);
    expect(jsonschema.validate).toHaveBeenCalledWith(restifyMock.request.params, schema);
    expect(restifyMock.response.send).toHaveBeenCalledWith(201);
  });

  it('should call Place.create but fail to create a risk', function() {
    isPromiseSuccess = false;
    reportRisk.addReportRisk(restifyMock.request, restifyMock.response, restifyMock.next);

    expect(Place.create).toHaveBeenCalledWith(restifyMock.validPlaceStructure);
    expect(restifyMock.response.send).toHaveBeenCalledWith(500);
  });

  it('should call Place.create and creates a risk with success', function() {
    reportRisk.addReportRisk(restifyMock.request, restifyMock.response, restifyMock.next);

    expect(Place.create).toHaveBeenCalledWith(restifyMock.validPlaceStructure);
    expect(restifyMock.response.send).toHaveBeenCalledWith(201);
  });

  it('should validate a place based on a valid risk', function() {
    expect(reportRisk.validateRisk(restifyMock.request.params)).toEqual(restifyMock.validPlaceStructure);
  });

  it('should fail to validate a place based on an invalid risk', function() {
    expect(reportRisk.validateRisk(restifyMock.invalidRequest.params)).toEqual(null);
  });

});
