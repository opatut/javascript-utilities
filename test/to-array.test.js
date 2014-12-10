'use strict';

var extractDomNodes = require('../to-array.js');
var assert = require('assert');
var sinon  = require('sinon');
var expect = require('expect.js');
var jsdom  = require("jsdom").jsdom;

var doc = "<div class='element'></div><div class='elements'></div><div class='elements'></div><div class='elements'></div><div class='elements'></div>";

global.document = jsdom(doc);
global.window   = document.parentWindow;
var $           = require('jquery')(window);

jsdom.jQueryify(window, '../node_modules/jquery/dist/jquery.js', function () {
    var $element = window.$('.element');
    var $elements = window.$('.elements');

    describe('toArray() with jQuery', function () {
        it('returns an array of plain dom nodes', function () {
            expect(extractDomNodes($element)).to.be.an('array');
            expect(extractDomNodes($elements)).to.be.an('array');
            assert.equal(extractDomNodes($element).length, 1);
            assert.equal(extractDomNodes($elements).length, 4);
            assert.equal(typeof extractDomNodes($elements)[0], 'object');
        });
    });
});

describe('toArray()', function () {
    var elements     = document.querySelectorAll('.elements');
    var element      = document.querySelector('.element');
    var emptyElement = document.querySelector('.emptyElement');

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
