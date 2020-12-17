const getVTimeAsString = require('./getVTimeAsString');

test('getVTimeAsString should return the time as a moment-compatible hour-colon-minute string', () => {
    expect(getVTimeAsString(9,0)).toBe('9:00');
});