const { exf } = require("./echo");

describe("exf function", () => {
    test("prints the string n times", () => {
        // Mock console.log
        console.log = jest.fn();

        exf("hello", 3);

        // Check it printed 3 times
        expect(console.log).toHaveBeenCalledTimes(3);

        // Check each call printed "hello"
        expect(console.log).toHaveBeenCalledWith("hello");
    });
});
