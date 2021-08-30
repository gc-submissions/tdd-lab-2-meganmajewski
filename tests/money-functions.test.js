const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  it("formats 0", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  it("formats 1.00", () => {
    expect(formatCurrency(1)).toBe("$1.00");
  });
  it("formats 1.50", () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  });
  it("formats 0.01", () => {
    expect(formatCurrency(0.01)).toBe("$0.01");
  });
  it("formats 527.6789", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });
  it("formats -1.00", () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });
  it("formats 233.33", () => {
    expect(formatCurrency(233.33)).toBe("$233.33");
  });
  it("formats -233.33", () => {
    expect(formatCurrency(-233.33)).toBe("-$233.33");
  });
});

describe("getCoins", () => {

  test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", function() {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });

  test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.", function() {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
    });
  });

  test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", function() {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
    });
  });

  test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.", function() {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    });
  });
});