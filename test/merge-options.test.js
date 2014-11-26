'use strict';

var mergeOptions = require('../merge-options.js');
var expect       = require('expect.js');

describe('mergeOptions', function() {
    var self         = {};

    var mockOptionsA = {errorMessageTimeout: 5000, maxFileSize: 3145728, maxFileNumber: 3};
    var mockOptionsB = { maxFileSize: 12312313,maxFileNumber: 23};
    var options      = mergeOptions(mockOptionsB, mockOptionsA, self);

    it('returns the merged options from default options and the user options', function() {
        expect(options.hasOwnProperty('errorMessageTimeout')).to.be(true);
        expect(options.hasOwnProperty('maxFileSize')).to.be(true);
        expect(options.hasOwnProperty('maxFileNumber')).to.be(true);
        expect(options.errorMessageTimeout).to.be(5000);
        expect(options.maxFileSize).to.be(12312313);
        expect(options.maxFileNumber).to.be(23);
    });
});
