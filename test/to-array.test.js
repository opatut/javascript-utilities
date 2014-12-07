'use strict';

var toArray = require('../to-array.js');
var expect  = require('expect.js');
var sinon   = require('sinon');
var assert  = require('assert');

describe('toArray()', function() {
    var instance = new $();

    it('has to call toArray if $ is defined', function () {
        toArray(instance);
    });
});

