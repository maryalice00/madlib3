const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it adds commas to a positive integer", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("it adds commas to a large positive integer", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("it adds commas to a very large positive integer", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("it handles a single-digit positive integer", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("it adds commas to a negative integer", () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test("it adds commas to a negative integer with multiple digits", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });
});