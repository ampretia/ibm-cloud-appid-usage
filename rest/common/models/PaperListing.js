'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(PaperListing) {
  Composer.restrictModelMethods(PaperListing);
};
