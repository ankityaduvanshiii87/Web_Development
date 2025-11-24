function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failed'));
      resolve('Server A completed');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failed'));
      resolve('Server B completed');
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.log(results);
  })
  .catch(err => console.error(err.message));

Promise.race([serverA(), serverB()])
  .then(first => {
    console.log('Fastest response:', first);
  })
  .catch(err => console.error(err.message));
