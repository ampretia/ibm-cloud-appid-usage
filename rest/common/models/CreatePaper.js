'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(CreatePaper) {
  Composer.restrictModelMethods(CreatePaper);
};
