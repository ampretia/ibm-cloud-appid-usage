'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CommercialPaper) {
  Composer.restrictModelMethods(CommercialPaper);
};
