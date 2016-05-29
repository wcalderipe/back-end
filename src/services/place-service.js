var Place = require('./../domains/place.model');
var Promise = require('bluebird');

module.exports = function(params) {
  return new Promise(function(resolve, reject) {
    Place.create(params)
      .then(function() {
        resolve();
      }, function() {
        reject();
      });
    });
}
