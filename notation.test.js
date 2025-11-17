const { mean } = require('./notation');

test('mean: calculates the average of an array of numbers', () => {
    expect(mean([10, 20, 30])).toBe(20);
});

test('mean: works with positive numbers', () => {
    expect(mean([2, 4, 6, 8])).toBe(5);
});

test('mean: works with negative numbers', () => {
    expect(mean([-2, -4, -6])).toBe(-4);
});

test('mean: handles a single element', () => {
    expect(mean([100])).toBe(100);
});
