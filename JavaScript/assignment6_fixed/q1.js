function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Boiler malfunction'));
      console.log('Water boiled');
      resolve('hot water');
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Coffee grounds missing'));
      console.log('Coffee brewed using', water);
      resolve('brewed coffee');
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error('Cup cracked'));
      console.log('Poured into cup:', coffee);
      resolve('Coffee ready for the team!');
    }, randomDelay());
  });
}

boilWater()
  .then(water => brewCoffee(water))
  .then(coffee => pourIntoCup(coffee))
  .then(message => console.log(message))
  .catch(err => console.error(err.message));
