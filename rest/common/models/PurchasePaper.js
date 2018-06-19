'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(PurchasePaper) {
  Composer.restrictModelMethods(PurchasePaper);
};
