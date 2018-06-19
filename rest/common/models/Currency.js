'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Currency) {
  Composer.restrictModelMethods(Currency);
};
