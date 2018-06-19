'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(ListOnMarket) {
  Composer.restrictModelMethods(ListOnMarket);
};
