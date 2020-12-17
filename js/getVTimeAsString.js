const doubleDigit = require('./doubleDigit.js');

const getVTimeAsString = (vHours, vMinutes) => {
    return `${vHours}:${doubleDigit(vMinutes)}`;
};

module.exports = getVTimeAsString;
