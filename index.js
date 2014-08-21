/*jshint asi:true*/
'use strict';
var util = require('util');

var words = function(string) {
    if (string) {
        return string.replace(/(^|\W)(\w)/g, function(m) {
            return m.toUpperCase();
        });
    } else {
        return false;
    }
};

function capitalizeArray(array) {
    if (array.length > 0) {
        var capitalizedArray = array.map(function(item) {
            return words(item)
        });
        return capitalizedArray;
    } else {
        return false
    }
}

module.exports = function(value) {
    if (typeof value === 'string') {
        return words(value)
    } else if (value && util.isArray(value)) {
        return capitalizeArray(value)
    } else {
        return false
    }
};
