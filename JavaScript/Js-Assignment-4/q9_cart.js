class Cart {
    constructor() {
        this.items = [];
        this.discount = 0;
    }
    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }
    getTotal() {
        const total = this.items.reduce((s, i) => s + i.price * i.qty, 0);
        return total - total * (this.discount / 100);
    }
    applyCoupon(code) {
        if (/^(SAVE|DISC)\d{2}$/.test(code)) {
            this.discount = Number(code.match(/\d+/)[0]);
            return true;
        }
        return false;
    }
}

const cart = new Cart();

function addItem() {
    cart.addItem("Item 1", 500, 2);
    cart.addItem("Item 2", 300, 1);
    result.textContent = "Items added!";
}

function apply() {
    const code = coupon.value;
    if (!cart.applyCoupon(code)) return result.textContent = "Invalid coupon";
    result.textContent = "Final total: " + cart.getTotal();
}
