'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(PaperOwnership) {
  Composer.restrictModelMethods(PaperOwnership);
};
