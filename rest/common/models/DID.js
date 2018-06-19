'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(DID) {
  Composer.restrictModelMethods(DID);
};
