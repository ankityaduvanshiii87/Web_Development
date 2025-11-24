function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function design(cb) {
  setTimeout(() => {
    console.log('Design completed');
    cb && cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log('Build completed');
    cb && cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log('Tests passed');
    cb && cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log('Deployed to production');
    cb && cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log('Celebrate! 🎉');
    cb && cb();
  }, 1000);
}

function runPipelineCallbacks() {
  design(() => {
    build(() => {
      test(() => {
        deploy(() => {
          celebrate(() => {
            console.log('Pipeline (callbacks) finished');
          });
        });
      });
    });
  });
}

async function runPipelineAsync() {
  try {
    console.log('Starting pipeline (async/await)');
    await delay();
    console.log('Design completed');
    await delay();
    console.log('Build completed');
    await delay();
    console.log('Tests passed');
    await delay();
    console.log('Deployed to production');
    await delay();
    console.log('Celebrate! 🎉');
    console.log('Pipeline (async/await) finished');
  } catch (err) {
    console.error('Pipeline failed:', err && err.message);
  }
}

runPipelineCallbacks();

setTimeout(() => {
  runPipelineAsync();
}, 7000);
