var mapHelpers = require('../map-helpers.js');
var expect = require('expect.js');

describe('mapHelpers', function () {
    describe('.wrap', function () {
        it('is a function', function () {
            expect(mapHelpers.wrap).to.be.a('function');
        });

        it('returns a function', function () {
            expect(mapHelpers.wrap(4)).to.be.a('function');
        });

        it('returns the input in range 0..n-1', function () {
            var wrap = mapHelpers.wrap(4);
            expect(wrap(0)).to.be(0);
            expect(wrap(1)).to.be(1);
            expect(wrap(2)).to.be(2);
            expect(wrap(3)).to.be(3);
        });

        it('is able to rotate right once', function () {
            var wrap = mapHelpers.wrap(4);
            expect(wrap(4)).to.be(0);
            expect(wrap(5)).to.be(1);
            expect(wrap(6)).to.be(2);
            expect(wrap(7)).to.be(3);
        });

        it('is able to rotate right multiple times', function () {
            var wrap = mapHelpers.wrap(4);
            expect(wrap(9)).to.be(1);
            expect(wrap(15)).to.be(3);
            expect(wrap(20)).to.be(0);
        });

        it('is able to rotate left once', function () {
            var wrap = mapHelpers.wrap(4);
            expect(wrap(-1)).to.be(3);
            expect(wrap(-2)).to.be(2);
            expect(wrap(-3)).to.be(1);
            expect(wrap(-4)).to.be(0);
        });

        it('is able to rotate left multiple times', function () {
            var wrap = mapHelpers.wrap(4);
            expect(wrap(-7)).to.be(1);
            expect(wrap(-16)).to.be(0);
        });
    });

    describe('.clamp', function () {
        it('is a function', function () {
            expect(mapHelpers.clamp).to.be.a('function');
        });

        it('returns a function', function () {
            expect(mapHelpers.clamp(0, 3)).to.be.a('function');
        });

        it('returns the input in range min..max', function () {
            var clamp = mapHelpers.clamp(10, 20);
            expect(clamp(10)).to.be(10);
            expect(clamp(15)).to.be(15);
            expect(clamp(20)).to.be(20);
        });

        it('returns the maximum for values greater than the maximum', function () {
            var clamp = mapHelpers.clamp(10, 20);
            expect(clamp(21)).to.be(20);
            expect(clamp(30)).to.be(20);
            expect(clamp(1000000)).to.be(20);
        });

        it('returns the minimum for values less than the minimum', function () {
            var clamp = mapHelpers.clamp(10, 20);
            expect(clamp(0)).to.be(10);
            expect(clamp(-20)).to.be(10);
        });

        it('works if minimum and maximum are swapped', function () {
            var clamp = mapHelpers.clamp(20, 10);
            expect(clamp(10)).to.be(10);
            expect(clamp(20)).to.be(20);
            expect(clamp(15)).to.be(15);
            expect(clamp(0)).to.be(10);
            expect(clamp(30)).to.be(20);
        });

        it('works if only maximum is supplied', function () {
            var clamp = mapHelpers.clamp(20);
            expect(clamp(30)).to.be(20);
            expect(clamp(20)).to.be(20);
            expect(clamp(19)).to.be(19);
            expect(clamp(10)).to.be(10);
            expect(clamp(1)).to.be(1);
            expect(clamp(0)).to.be(0);
            expect(clamp(-1)).to.be(0);
            expect(clamp(-10)).to.be(0);
        });

        it('works in negative ranges', function () {
            var clamp = mapHelpers.clamp(-10, -20);
            expect(clamp(-20)).to.be(-20);
            expect(clamp(-10)).to.be(-10);
            expect(clamp(-9)).to.be(-10);
            expect(clamp(-21)).to.be(-20);
            expect(clamp(21)).to.be(-10);
        });
    });

    describe('.constant', function () {
        it('is a function', function () {
            expect(mapHelpers.constant).to.be.a('function');
        });

        it('returns a function', function () {
            expect(mapHelpers.constant(100)).to.be.a('function');
        });

        it('returns the value for various types', function () {
            [100, {}, [], null, undefined, 0, "hello"].forEach(function (value) {
                expect(mapHelpers.constant(value)()).to.be(value);
            });
        });
    });
});
