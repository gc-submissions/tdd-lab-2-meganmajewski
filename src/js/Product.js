class Product {
    constructor(name, someNum, someBool) {
        this.name = name;
        this.price = someNum;
        this.taxable = someBool;
    }
    getPriceWithTax() {
        if(this.taxable === true) {
            return this.price * 1.10;
        } else {
            return this.price
        }
    }
}

module.exports = { Product }