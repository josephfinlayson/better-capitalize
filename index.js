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
