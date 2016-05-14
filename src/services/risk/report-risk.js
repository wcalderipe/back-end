// [{
//   "address": "Av. Ipiranga",
//   "location": {
//     "latitude": 10,
//     "longitude": 20
//   },
//   "occurrences": [{
//     "risk": "Roubo",
//     "count": 2,
//     "reports": [
//       {
//       "date": "10/10/2016",
//       "period": "Manhã"
//     },
//     {
//       "date": "12/10/2016",
//       "period": "Manhã"
//     }]},
//     {
//       "risk": "Local Mal Iluminado",
//       "count": 2,
//       "reports": [
//         {
//         "date": "10/10/2016",
//         "period": "Manhã"
//       },
//       {
//         "date": "12/10/2016",
//         "period": "Manhã"
//       }]
//   }]
// }]

// var db = require('../../db.connection.js');
var Place = require('../../place.model.js');

module.exports = {
  controller: function (req, res, next) {
    var place = this.create();

    console.log(req.params)
    res.json(201, req.params);
    return next();
  },
  create: function() {
      return new Place().save();
  }
};
