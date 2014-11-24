'use strict';

/**
 * [toArray description]
 * @param  {[type]} object [description]
 * @return {[type]}        [description]
 */
var toArray = function (object) {
    if (typeof obj === 'function') {
        return object.toArray();
    }

    return Array.prototype.slice.call(object);
};

module.exports = toArray;
