'use strict';

/**
 * Returns an array or an object of plain DOM nodes
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
var toArray = function (object) {
    var isDomElement = function (object) {
        if (typeof HTMLElement === "object") {
            return object instanceof HTMLElement;
        }

        return object &&
            typeof object === "object" &&
            object !== null &&
            object.nodeType === 1 &&
            typeof object.nodeName==="string";
    };

    if (object === null || object && object.length === 0 || object && object.length === null) {
        return -1;
    }

    if (object && object !== null && isDomElement) {
        if(object && object.length === undefined) {
            return [object];
        }

        return Array.prototype.slice.call(object);
    }
};

module.exports = toArray;
