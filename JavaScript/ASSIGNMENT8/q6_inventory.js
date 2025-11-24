const products = [
  { id: 1, name: 'Pen', category: 'Stationery', price: 1.5, stock: 50 },
  { id: 2, name: 'Notebook', category: 'Stationery', price: 3.0, stock: 20 },
  { id: 3, name: 'Water Bottle', category: 'Home', price: 10.0, stock: 5 },
  { id: 4, name: 'Lamp', category: 'Home', price: 25.0, stock: 2 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 60.0, stock: 10 }
];

function getLowStockProducts(threshold = 5) {
  return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(order = 'asc') {
  return [...products].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((acc, p) => acc + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log('Low stock:', getLowStockProducts());
console.log('Sorted asc:', sortProductsByPrice('asc'));
console.log('Total value:', calculateTotalInventoryValue());
console.log('Grouped:', groupByCategory());
