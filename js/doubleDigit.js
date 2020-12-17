const doubleDigit = (digit) => {
    return digit < 10 ? `0${digit}` : digit;
};

module.exports = doubleDigit;
