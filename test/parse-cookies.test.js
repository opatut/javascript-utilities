var parseCookies = require('../parse-cookies.js');
var expect = require('expect.js');

describe('parseCookies', function () {
    it('is a function', function () {
        expect(parseCookies).to.be.a('function');
    });

    it('returns an object', function () {
        expect(parseCookies()).to.be.an('object');
    });

    it('returns reasonable data', function () {
        var cookies = parseCookies('a=1;b=2;c=3');
        expect(cookies).to.be.eql({a: 1, b: 2, c: 3});
    });

    it('returns the last occurence of a key', function () {
        var cookies = parseCookies('a=1;b=2;a=3');
        expect(cookies).to.be.eql({a: 3, b: 2});
    });

    it('works on document.cookies', function () {
        document.cookie = 'it=works';
        var cookies = parseCookies();
        expect(cookies).to.be.eql({it: "works"});
    });

    it('transforms data using dataParser', function () {
        var cookies = parseCookies('a=x;b=y', function (x) {
            return "<" + x + ">";
        });
        expect(cookies).to.be.eql({a: "<x>", b: "<y>"});
    });
});