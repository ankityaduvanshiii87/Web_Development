console.log('Start');

setTimeout(() => {
  console.log('setTimeout (macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise.then (microtask)');
});

console.log('Synchronous log');

console.log('End');
