var Place = require('./../../../src/domains/place.model.js');
var placeService = require('./../../../src/services/place-service.js');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();

describe('Place Service', function() {
  var params = {};
  var isPromiseSuccess;
  var promise = {
    then: function(success, error) {
      if(isPromiseSuccess) {
        success();
      }
      error();
    }
  };

  beforeEach(function() {
    isPromiseSuccess = true;
    spyOn(Place, 'create').andReturn(promise);
  });

  it('should call Place.create and creates a risk with success', function(done){
    placeService.create(params).should.be.fulfilled.and.notify(done);
    expect(Place.create).toHaveBeenCalledWith(params);
  });

  it('should call Place.create and reject when does not create a risk with success', function(done){
    isPromiseSuccess = false;
    placeService.create(params).should.be.rejected.and.notify(done);
    expect(Place.create).toHaveBeenCalledWith(params);
  });
});
