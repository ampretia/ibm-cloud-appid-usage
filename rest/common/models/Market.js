'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Market) {
  Composer.restrictModelMethods(Market);
};
