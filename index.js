'use strict';
module.exports = function(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    } else {
        return false;
    }
};

module.exports.words = function(string) {
    if (string) {
        return string.replace(/(^|\W)(\w)/g, function(m) {
            return m.toUpperCase();
        });
    } else {
        return false;
    }
};

module.exports.array = function(array) {
    if (array && array.isArray()) {
        var capitalizedArray = array.map(function(item) {
        	return item.charAt(0).toUpperCase() + item.substring(1);
        });
        return capitalizedArray;
    } else {
        return false;
    }
};
