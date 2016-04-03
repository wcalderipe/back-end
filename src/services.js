var Place = require('./place.model');

module.exports = {
  risksAround: function (request, response) {
    if (Object.keys(request.params).length === 0) {
      return response.send(300, 'Invalid params.');
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
      return response.send(places);
    });
  }
};
