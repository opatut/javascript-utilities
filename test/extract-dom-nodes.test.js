'use strict';

var extractDomNodes = require('../extract-dom-nodes.js');
var assert = require('assert');
var sinon  = require('sinon');
var expect = require('expect.js');

describe('extractDomNodes()', function () {
    describe('called with jQuery object', function () {
        var instance;

        beforeEach(function () {
            global.$ = function () {
                this.length = 1;
                this.get = sinon.spy();
            };

            instance = new $();
        });

        it('calls .get() if object is instanceof $', function () {
            extractDomNodes(instance);
            assert(instance.get.calledOnce);
        });
    });

    describe('called with plain DOM object', function () {
        var emptyObj = {
            length: 0
        };

        it('returns if object is empty', function () {
            expect(extractDomNodes(emptyObj)).to.be(-1);
        });

        it('Returns the DOM object if just 1 node is found', function () {
            var obj = {
                length: undefined
            };

            assert.equal(extractDomNodes(obj), obj);
        });

        it('returns an array of nodes if more nodes are found', function () {
            var obj = {
                length: 4
            };

            expect(extractDomNodes(obj)).to.be.an('array');
            assert.equal(extractDomNodes(obj).length, 4);
        });
    });
});
