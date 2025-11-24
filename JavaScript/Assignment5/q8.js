if (!Array.prototype.myMap) {
  Object.defineProperty(Array.prototype, "myMap", {
    value: function(callback, thisArg) {
      const result = [];
      for (let i = 0; i < this.length; i++) {
        if (i in this) {
          result[i] = callback.call(thisArg, this[i], i, this);
        }
      }
      return result;
    },
    writable: true,
    configurable: true,
    enumerable: false
  });
}

console.log([1, 2, 3].myMap(x => x * 2));
