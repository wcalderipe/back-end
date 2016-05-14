var Place = require('../../place.model.js');

module.exports = {
  controller: function (req, res, next) {
    res.json(201, req.params);
    return next();
  },
  create: function() {
    var place = new Place();
    return place.save();
  }
};
