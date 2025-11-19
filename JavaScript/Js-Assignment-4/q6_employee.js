class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "A", "HR", 20000),
    new Employee(2, "B", "IT", 30000),
    new Employee(3, "C", "Sales", 25000),
    new Employee(4, "D", "Admin", 28000),
    new Employee(5, "E", "IT", 35000)
];

employees.forEach(e => e.applyBonus(10));

const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

output.textContent = JSON.stringify({ employees, total }, null, 2);
