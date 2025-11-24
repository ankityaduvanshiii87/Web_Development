function makeMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5));

const timesTen = makeMultiplier(10);
console.log(timesTen(4));
