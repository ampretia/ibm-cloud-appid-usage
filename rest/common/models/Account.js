'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Account) {
  Composer.restrictModelMethods(Account);
};
