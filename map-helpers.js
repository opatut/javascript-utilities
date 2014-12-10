'use strict';

exports.rotator = function (x) {
    return function (value) {
        return value % x;
    };
};

exports.getLimiter = function (maxValue) {
    return function (value) {
        return Math.min(Math.max(value, 0), maxValue);
    };
};
exports.returnIndex = function (index) {
    return function () {
        return index;
    };
};
