var frisby = require('frisby');
frisby.create('Search around a place')
  .get('http://localhost:8080/risks-around?lat=300&long=400')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
.toss();
