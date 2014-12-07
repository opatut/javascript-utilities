'use strict';

/**
 * [toArray description]
 * @param  {[type]} object [description]
 * @return {[type]}        [description]
 */
var toArray = function (object) {
    if ($ && object instanceof $) {
        return object.toArray();
    }

    return Array.prototype.slice.call(object);
};

module.exports = toArray;
