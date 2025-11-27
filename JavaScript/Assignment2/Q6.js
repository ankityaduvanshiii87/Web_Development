let count = 0;
function counter() {
  function increment() {
    count++;
    console.log(`Count: ${count}`);
  }
  function decrement() {
    count--;
    console.log(`Count: ${count}`);
  }
  return { increment, decrement };
}
let c = counter();
c.increment();
c.increment();
c.decrement();
