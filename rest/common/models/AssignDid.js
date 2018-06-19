'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(AssignDid) {
  Composer.restrictModelMethods(AssignDid);
};
