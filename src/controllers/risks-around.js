var Place = require('../../place.model');
var isNumeric = require('is-numeric');
module.exports = function (request, response) {

  if (Object.keys(request.params).length === 0) {
    return response.send(400, 'Invalid params.');
  }

  if (!isNumeric(request.params.latitude) || !isNumeric(request.params.longitude) ) {
    return response.send(400, 'Invalid latitude or longitude.');
  }

  var maxDistance = 100;
  var coords = [];
  coords[0] = request.params.longitude;
  coords[1] = request.params.latitude;

  Place.find({
    loc: {
      $near: coords,
      $maxDistance: maxDistance
    }
  }).exec(function (err, places) {
    if (err) {
      return console.error(err);
    }
    console.log(places);
    console.log(places.length);

    if (places.length === 0) {
        return response.send(204);
    }

    return response.send(places);
  });
  
};
