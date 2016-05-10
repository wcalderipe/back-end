// Estrutura do JSON get
// {
//  "title": "Chafariz da Rendenção",
//  "occurrences": [{
//      "address": "Avenida Ipiranga",
//      "risk": "Local Deserto",
//      "date": "10/10/2015",
//      "period":"Manhã",
//      "numberOfOccurrences": 3
//    }, {
//      "risk": "Mal Iluminado",
//      "date": "10/10/2015",
//      "period":"Manhã",
//      "numberOfOccurrences": 6
//    }, {
//      "risk": "roubo",
//      "date": "10/10/2015",
//      "period":"Manhã",
//      "numberOfOccurrences": 6
//    }
//  ]
// }

// var db = require('../../db.connection.js');
var Place = require('../../place.model.js');

module.exports = function (req, res, next){
  // validate
  var query = req.params;
  console.log(query);

  // find existing place on db
  // insert into mongodb
  var risk = {
    category: "123",
    date: new Date()
  };

  var newPlace = new Place({
    loc: [],
    address: "abc",
    reports: [
        risk
    ]
  });

  Place.find({}, function(err, places){
    if (err) {
      console.log("error");
      console.log(err);
    }
    else {
      console.log("obj");
      console.log(places.length);
      console.log(obj);
    }
  });

  // Place.save(function(err, data) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     console.log('Saved ', data);
  //   }
  // });

  // return success
  console.log(req.params)
  res.json(201, req.params);
  return next();
};
