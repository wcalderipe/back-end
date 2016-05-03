var reportRisk = require('../../../../src/services/risk/report-risk.js');

describe('Create a new risk report', function () {
  var request;
  var response;
  var restifyMock;

  beforeEach(function() {
    request = {};
    response = { json: function(){} };
    restifyMock = { next: function(){} };
  });

  it('Should call response json',function() {
    spyOn(response, 'json');

    reportRisk(request, response, restifyMock.next);
    expect(response.json).toHaveBeenCalled();
  });

  it('Should call next after report creation',function() {

    spyOn(restifyMock, 'next');
    reportRisk(request, response, restifyMock.next);
    expect(restifyMock.next).toHaveBeenCalled();
  });

});
