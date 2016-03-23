var db = require('../db.connection');

var mongoose = require('mongoose');

describe('db connection', function () {
  describe('open', function () {
    it('connect to vamosjuntas database', function () {
      spyOn(mongoose, 'connect').andCallThrough();

      db.open();

      expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost/vamosjuntas');
    });
  });

  describe('close', function () {
    it('disconnect from vamosjuntas database', function () {
      spyOn(mongoose, 'disconnect').andCallThrough();

      db.close();

      expect(mongoose.disconnect).toHaveBeenCalled();
    });
  });
});
