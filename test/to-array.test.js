'use strict';

var extractDomNodes = require('../extract-dom-nodes.js');
var assert = require('assert');
var sinon  = require('sinon');
var expect = require('expect.js');
var jsdom  = require("jsdom").jsdom;

global.document = jsdom("<div class='element'></div><div class='elements'></div><div class='elements'></div><div class='elements'></div><div class='elements'></div>");
global.window   = document.parentWindow;

var elements     = document.querySelectorAll('.elements');
var element      = document.querySelector('.element');
var emptyElement = document.querySelector('.emptyElement');

describe('toArray()', function () {
    it('returns -1 if object is empty, null or object has a length of 0', function () {
        expect(extractDomNodes(emptyElement)).to.be(-1);
        expect(extractDomNodes(null)).to.be(-1);
    });

    it('returns 1 element wrapped in an array', function () {
        expect(extractDomNodes(element)).to.be.an('array');
        expect(extractDomNodes(element).length).to.be(1);
    });

    it('returns an array of objects', function () {
        expect(extractDomNodes(elements)).to.be.an('array');
        assert.equal(extractDomNodes(elements).length, 4);
        assert.equal(typeof extractDomNodes(elements)[0], 'object');
    });
});
