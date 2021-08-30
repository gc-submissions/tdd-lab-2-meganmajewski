class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  getItemCount() {
    return this.items.length;
  }

  getTotalBeforeTax() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.price;
    }
    return sum;
  }

  getTotalWithTax() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.getPriceWithTax();
    }
    return sum;
  }

  getTax() {
    return this.getTotalWithTax() - this.getTotalBeforeTax();
  }
}

module.exports = Cart;