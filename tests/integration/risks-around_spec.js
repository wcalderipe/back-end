// var frisby = require('frisby');
//
// frisby.create('Needs latitude and logitude params')
//   .get('http://localhost:8080/risks-around')
//   .expectStatus(400)
//   .toss();
//
//
// frisby.create('Search around a place')
//   .get('http://localhost:8080/risks-around?latitude=1&longitude=2')
//   .expectStatus(200)
//   .expectHeaderContains('content-type', 'application/json')
//   .toss();
//
// frisby.create('Should fail gracefully when latitude and longitude does not exists')
//   .get('http://localhost:8080/risks-around?latitude=90&longitude=90')
//   .expectStatus(204)
//   .toss();
