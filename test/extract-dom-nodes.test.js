'use strict';

var extractDomNodes = require('../extract-dom-nodes.js');
var assert = require('assert');
var sinon  = require('sinon');
var expect = require('expect.js');

describe('extractDomNodes()', function () {
    var emptyObj = {
        length: 0
    };

    var $ = function () {
        this.length = 4;
        this.get = sinon.spy();
    };

    it('returns if object is empty', function () {
        expect(extractDomNodes(emptyObj)).to.be(-1);
    });

    it('calls .get() if object is instanceof $', function () {
        var instance = new $();
        extractDomNodes(instance);
        assert(instance.get.calledOnce);
    });
});
