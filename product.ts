class Product {
    name: string;
    price: number;
    pId: number;
    inCart: boolean = false;
    isOrdered: boolean = false;
    constructor(name: string, price: number, pId: number) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart(): void {
        this.inCart = true;
    }
    buyProduct(): string {
        if (this.inCart) {
            this.isOrdered = true;
            this.inCart = false;
            return "Product purchased successfully.";
        } else {
            return "Product is not in the cart.";
        }
    }
}

var product = new Product("Acer", 1000, 1);
product.addToCart();
console.log(product.buyProduct());
