const { chunk } = require("./chunk");

test("splits array into chunks of given size", () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
    expect(chunk([1,2,3,4,5,6,7], 3)).toEqual([[1,2,3],[4,5,6],[7]]);
});
