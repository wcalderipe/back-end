var reportRisk = require('../../../../src/services/risk/report-risk.js');

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
  });

});
