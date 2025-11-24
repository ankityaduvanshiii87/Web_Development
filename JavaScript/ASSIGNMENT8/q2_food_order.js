const menu = {
  burger: 5.99,
  pizza: 9.5,
  fries: 3.0,
  soda: 1.5
};

function calculateBill(orderItems) {
  if (!Array.isArray(orderItems)) throw new Error('Order must be an array');
  const prices = orderItems.map(item => {
    if (!(item in menu)) throw new Error(`Invalid item ordered: ${item}`);
    return menu[item];
  });
  const total = prices.reduce((acc, p) => acc + p, 0);
  return total;
}

try {
  console.log('Total:', calculateBill(['burger', 'fries', 'soda']));
  console.log('Total:', calculateBill(['pizza', 'icecream']));
} catch (err) {
  console.error('Order error:', err.message);
}
