class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }
  work() {
    return `${this.name} is managing ${this.department} team`;
  }
}

const e = new Employee('Dana', 'Engineering');
const m = new Manager('Evan', 'Engineering');

console.log(e.work());
console.log(m.work());
