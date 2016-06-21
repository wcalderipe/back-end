var merge = require('lodash/merge');

module.exports = function(environment) {
  var env = environment || process.env.NODE_ENV || 'development';
  return merge(require('./default'), require('./' + env));
};

