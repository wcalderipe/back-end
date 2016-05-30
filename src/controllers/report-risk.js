var jsonschema = require('jsonschema');
var riskSchema = require('./schemas/risk.json');
var placeSchema = require('./schemas/place.json');
var Place = require('../domains/place.model.js');

var validateRisk = function(risk) {
  if (jsonschema.validate(risk, riskSchema).valid) {
    var placeStructure = {
      loc: [risk.location.longitude, risk.location.latitude],
      address: risk.address,
      reports: [
        {
          category: risk.risk,
          date: risk.date,
        }
      ]
    };

    if (jsonschema.validate(placeStructure, placeSchema).valid) {
      return placeStructure;
    }
  }

  return null;
};

var addReportRisk = function(request, response, next) {
  var newPlace = validateRisk(request.params);

  if (newPlace !== null) {
    Place.create(newPlace)
      .then(function() {
        response.send(201);
      }, function() {
        response.send(500);
      });
  } else {
    response.send(400);
  }

  return next();
};

module.exports = {
  addReportRisk: addReportRisk,
  validateRisk: validateRisk
}
