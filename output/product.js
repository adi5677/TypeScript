"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            this.isOrdered = true;
            this.inCart = false;
            return "Product purchased successfully.";
        }
        else {
            return "Product is not in the cart.";
        }
    }
}
var product = new Product("Acer", 1000, 1);
product.addToCart();
console.log(product.buyProduct());
//# sourceMappingURL=product.js.map