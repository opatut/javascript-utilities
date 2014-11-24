'use strict';

var noPropagation = require('../no-propagation.js');
var assert = require('assert');
var sinon  = require('sinon');
var expect = require('expect.js');

describe('noPropagation()', function () {
    var EventMock = function () {
        this.stopPropagation = sinon.spy();
        this.preventDefault = sinon.spy();
        this.returnValue = false;
    };

    var NoPreventDefaultMock = function () {
        this.stopPropagation = sinon.spy();
        this.returnValue = false;
    };

    var evtMock              = new EventMock();
    var noPreventDefaultMock = new NoPreventDefaultMock();

    describe('with evtMock', function () {
        before('call noPropagation() once', function () {
            noPropagation(evtMock);
        });

        it('called stopPropagation once', function () {
            assert(evtMock.stopPropagation.calledOnce);
            assert(evtMock.stopPropagation.calledBefore(evtMock.preventDefault));
        })

        it('called preventDefault once', function () {
            assert(evtMock.preventDefault.calledOnce);
        });
    });

    describe('with noPreventDefaultMock', function () {
        before('call noPropagation() once', function () {
            noPropagation(noPreventDefaultMock);
        });

        it('preventDefault is undefined', function () {
            expect(noPreventDefaultMock.preventDefault).to.be(undefined);
        })

        it('returnvalue has to be false ', function () {
            expect(noPreventDefaultMock.returnValue).to.be(false);
        });
    });
});
