const { first } = require("./first");

test("returns first n elements of array", () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
});

test("returns first element if n is null", () => {
    expect(first([10, 20, 30], null)).toBe(10);
});

test("returns empty array if n <= 0", () => {
    expect(first([1, 2, 3], 0)).toEqual([]);
});

test("returns empty array if array is null", () => {
    expect(first(null, 3)).toEqual([]);
});
