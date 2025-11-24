class BankAccount {
  #balance;
  constructor(initial = 0) {
    this.#balance = initial;
  }
  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit must be positive');
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdraw must be positive');
    if (amount > this.#balance) throw new Error('Insufficient balance');
    this.#balance -= amount;
    return this.#balance;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
try {
  acc.withdraw(200);
} catch (e) {
  console.error('Withdraw error:', e.message);
}
console.log('Balance:', acc.getBalance());
