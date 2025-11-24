class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  return `Ticket: ${this.movieName} | Seat: ${this.seatNo} | Price: $${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }
  getTotalAmount() {
    return Number((this.price + this.convenienceFee).toFixed(2));
  }
}

const ot = new OnlineTicket('Inception', 'A10', 12.5, 1.5);
console.log(ot.printTicket());
console.log('Total:', ot.getTotalAmount());
