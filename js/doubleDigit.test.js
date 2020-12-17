const { test, expect } = require('@jest/globals');
const doubleDigit = require('./doubleDigit');

test('returns a number under 10 as a two-digit string', () => {
    expect(doubleDigit(2)).toBe('02'); 
});
