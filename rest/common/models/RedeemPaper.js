'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(RedeemPaper) {
  Composer.restrictModelMethods(RedeemPaper);
};
