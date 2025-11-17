const { joincolors } = require("./joincolors");

test("concatenates array of strings", () => {
    const result = joincolors(["Red","Green","White","Black"]);
    expect(result.toString).toBe("Red,Green,White,Black");
    expect(result.joinDefault).toBe("Red,Green,White,Black");
    expect(result.joinNoSeparator).toBe("RedGreenWhiteBlack");
});
