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

    if (object && object !== null) {
        if(object && object.length === undefined && isDomElement(object)) {
            return [object];
        }

        if(isDomElement(Array.prototype.slice.call(object)[0])) {
            return Array.prototype.slice.call(object);
        }
    }
};

module.exports = toArray;
