var db = require('../../src/db.connection');
var mongoose = require('mongoose');

describe('db connection', function () {
  describe('open', function () {
    it('connect to vamosjuntas database', function () {
      spyOn(mongoose, 'connect');

      db.open();

      expect(mongoose.connect).toHaveBeenCalledWith('mongodb://mongodb/vamosjuntas_test');
    });
  });

  describe('close', function () {
    it('disconnect from vamosjuntas database', function () {
      spyOn(mongoose, 'disconnect');

      db.close();

      expect(mongoose.disconnect).toHaveBeenCalled();
    });
  });
});
