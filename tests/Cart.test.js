const Cart = require("../src/js/Cart");
const { Product } = require("../src/js/Product");

describe("Cart", () => {
  test("constructor sets items to empty array", () => {
    const cart = new Cart();
    expect(cart.items).toEqual([]);
  });

  test("add appends product to items", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 7, true));
    expect(cart.items).toEqual([
      new Product("Fish", 7, true)
    ]);
  });

  test("add appends multiple products to items", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 7, true));
    cart.add(new Product("Chips", 3, true));
    expect(cart.items).toEqual([
      new Product("Fish", 7, true),
      new Product("Chips", 3, true)
    ]);
  });

  test("getItemCount returns number of items", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 7, true));
    cart.add(new Product("Chips", 3, true));
    expect(cart.getItemCount()).toBe(2);
  });

  test("getItemCount returns number of items", () => {
    const cart = new Cart();
    expect(cart.getItemCount()).toBe(0);
  });

  test("getTotalBeforeTax returns sum of prices", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 7, true));
    cart.add(new Product("Chips", 3, true));
    cart.add(new Product("Salad", 4, false));
    expect(cart.getTotalBeforeTax()).toBe(14);
  });

  test("getTotalBeforeTax returns sum of prices", () => {
    const cart = new Cart();
    cart.add(new Product("Peas", 2.5, false));
    cart.add(new Product("Mop", 12, true));
    expect(cart.getTotalBeforeTax()).toBeCloseTo(14.5);
  });

  test("getTotalWithTax returns sum of prices with tax", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 7, true));
    cart.add(new Product("Chips", 3, true));
    cart.add(new Product("Salad", 4, false));
    expect(cart.getTotalWithTax()).toBeCloseTo(15);
  });

  test("getTotalWithTax returns sum of prices with tax", () => {
    const cart = new Cart();
    cart.add(new Product("Peas", 2.5, false));
    cart.add(new Product("Mop", 12, true));
    expect(cart.getTotalWithTax()).toBeCloseTo(15.7);
  });

  test("getTax returns difference between with tax and before tax", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 7, true));
    cart.add(new Product("Chips", 3, true));
    cart.add(new Product("Salad", 4, false));
    expect(cart.getTax()).toBeCloseTo(1);
  });
});