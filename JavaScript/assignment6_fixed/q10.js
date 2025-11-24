function randDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error(name + ' failed'));
      console.log('Step:', name);
      resolve(name + ' done');
    }, randDelay());
  });
}

function takeOrder() { return step('Order taken'); }
function prepare() { return step('Food prepared'); }
function pack() { return step('Package ready'); }
function dispatch() { return step('Out for delivery'); }
function deliver() { return step('Delivery completed'); }

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await takeOrder();
    console.log('Step 1: Order taken');
    await prepare();
    console.log('Step 2: Food prepared');
    await pack();
    console.log('Step 3: Package ready');
    await dispatch();
    console.log('Step 4: Out for delivery');
    await deliver();
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

runPipeline();
