'use strict';

/**
 * Returns an array or an object of plain DOM nodes
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
var extractDomNodes = function (obj) {
    if (obj.length === 0 || obj.length === null) {
        return -1;
    }

    if ($ && obj instanceof $ && obj.length > 0) {
        if (obj.length === 1) {
            return obj.get(0);
        }

        return obj.get();
    }

    if (obj.length === undefined || (obj.length > 0 && !!$)) {
        if (obj.length > 1) {
            return Array.prototype.slice.call(obj);
        }

        return obj;
    }
};

module.exports = extractDomNodes;
