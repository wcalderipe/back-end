var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/vamosjuntas_test',function(error, db) {
  if (error){
    console.log('error mongo');
  } else {
    var places = [{address: 'text'}]; // TODO include real json
    db.collection('places').remove(function() {
      db.collection('places').insert(places,function() {
        db.close();
      });
    });
  }
});
