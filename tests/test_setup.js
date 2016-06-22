var configs = require('../src/configs')('test').mongodb;
var MongoClient = require('mongodb').MongoClient;

var connectURI = 'mongodb://' + configs.host + '/' + configs.database;
MongoClient.connect(connectURI, function(error, db) {
  if (error){
    console.log('error mongo');
  } else {
    var places = [{loc:['-30.060653, -51.171270'],address: 'Rua blá',
    reports:[{category:'local deserto', date:'2016-03-16T12:41:51.002Z'}]}];
    db.collection('places').remove(function() {
      db.collection('places').insert(places,function() {
        db.close();
      });
    });
  }
});
