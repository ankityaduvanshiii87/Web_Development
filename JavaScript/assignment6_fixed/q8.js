function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) return reject(new Error('Random submit failure'));
      resolve('Order submitted successfully');
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success -`, res);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed -`, err.message);
      if (attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
    }
  }
}

processOrder()
  .then(() => console.log('Order processing finished'))
  .catch(err => console.error(err.message));
