class User {
  constructor(name, rating = 5) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance == null || typeof this.distance !== 'number') throw new Error('Distance must be provided as a number');
    if (this.distance < 0) throw new Error('Distance cannot be negative');
    const baseFare = 2.5;
    const perKm = 1.2;
    return Number((baseFare + perKm * this.distance).toFixed(2));
  }
}

try {
  const trip1 = new Trip('A', 'B', 10);
  console.log('Fare:', trip1.calculateFare());
  const trip2 = new Trip('C', 'D', -5);
  console.log('Fare:', trip2.calculateFare());
} catch (err) {
  console.error('Trip error:', err.message);
}
