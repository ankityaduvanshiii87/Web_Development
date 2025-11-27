const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
let discounted = cart.map(p => {
  if (p.category === "electronics") p.price *= 0.9;
  else if (p.category === "fashion") p.price *= 0.95;
  return p;
});
let total = discounted.reduce((a, b) => a + b.price, 0);
if (total > 50000) total *= 0.95;
console.log(`Final Total: ₹${total.toFixed(2)}`);
