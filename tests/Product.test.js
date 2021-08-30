
const { Product } = require('../src/js/Product');

describe("Product", () => {
  test("can set properties on class", () => {
    const product = new Product('Megan', 1234, true);
    
   expect(product.name).toEqual("Megan");
   expect(product.price).toEqual(1234);
   expect(product.taxable).toEqual(true);
  });

  test('can set properties on class', ()=> {
    expect(new Product('Cooper', 1, false)).toEqual({"name": "Cooper", "price": 1, "taxable": false});
  })

  test('taxable product returns price + 10%', () => {
    const productWithTax = new Product('shirt', 1, true);
    expect(productWithTax.getPriceWithTax()).toEqual(1.1);
  });

  test('taxable product returns price + 10% float number', ()=> {
    const productWithTax2 = new Product('shirt', 3, true);
    expect(productWithTax2.getPriceWithTax()).toBeCloseTo(3.30);
  });

  test('non taxable product returns price', ()=> {
    const product = new Product('pants', 1, false);
    expect(product.getPriceWithTax()).toBe(1);
  });

  test('non taxable product returns price, big number', ()=> {
    const product2 = new Product('pants', 143452134123, false);
  
    expect(product2.getPriceWithTax()).toBe(143452134123);
  })
});