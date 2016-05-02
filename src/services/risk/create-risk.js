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

module.exports = function (req, res, next){
  // validate
  // insert into mongodb
  // return success
  console.log(req.params)
  res.json(201, req.params);
  return next();
};
