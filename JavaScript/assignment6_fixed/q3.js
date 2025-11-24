function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error('API failure'));
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.error(err.message));
