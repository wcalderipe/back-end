var Place = require('./../../../src/domains/place.model.js');

describe('Place Model', function() {

  it('should find address in db', function(done){
    spyOn(Place, 'findByAddress').andReturn(Promise.resolve());


    expect(Place.findByAddress).toHaveBeenCalledWith({});
  });

});
