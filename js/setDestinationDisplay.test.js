const setDestinationDisplay = require('./setDestinationDisplay');

test('returns a string for display', () => {
    const testInput = setDestinationDisplay(1, {
        display: 'testStation',
        arrivalTime: 40,
    }, 35);
    const expectedOutput = '1 testStation 5 mins';
    expect(testInput).toBe(expectedOutput);
});
