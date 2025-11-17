const { last } = require("./last");

test("returns last n elements", () => {
    expect(last([1,2,3,4], 2)).toEqual([3,4]);
});

test("returns last element if n is null", () => {
    expect(last([5,6,7], null)).toBe(7);
});

test("returns empty array if array is null", () => {
    expect(last(null, 3)).toEqual([]);
});
