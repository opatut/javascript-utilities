'use strict';

/**
 * [mergeOptions description]
 * @param  {[type]} opts           [description]
 * @param  {[type]} defaultoptions [description]
 * @return {[type]}                [description]
 */
var mergeOptions = function (opts, defaultOptions, self) {
    var options = {};

    for (var i in defaultOptions) {
        if (opts && opts.hasOwnProperty(i)) {
            options[i] = opts[i];
        } else {
            options[i] = defaultOptions[i];
        }

        if (typeof options[i] === 'function') {
            options[i] = options[i].bind(self);
        }
    }

    return options;
};

module.exports = mergeOptions;
