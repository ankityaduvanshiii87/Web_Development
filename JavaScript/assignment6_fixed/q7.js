function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject('Profile failed');
      resolve('Profile Loaded');
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject('Posts failed');
      resolve('Posts Loaded');
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject('Messages failed');
      resolve('Messages Loaded');
    }, 1000);
  });
}

(async function() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  results.forEach((r, i) => {
    const status = r.status;
    const valueOrReason = status === 'fulfilled' ? r.value : r.reason;
    console.log(`Module ${i + 1}: ${status.toUpperCase()} - ${valueOrReason}`);
  });
  console.log('Total time (ms):', end - start);
})();
