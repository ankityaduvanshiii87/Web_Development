function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) throw new Error('Invalid discount');
  const discounted = this.price * (1 - percent / 100);
  return Number(discounted.toFixed(2));
};

const p1 = new Product('Laptop', 1200);
const p2 = new Product('Headphones', 150);
const p3 = new Product('Mouse', 30);

console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(25));
console.log(p3.name, p3.applyDiscount(5));
