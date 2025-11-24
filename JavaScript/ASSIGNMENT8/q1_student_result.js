class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (!Array.isArray(this.marks) || this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, m) => acc + m, 0);
    return sum / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    if (avg >= 75) return 'B';
    if (avg >= 60) return 'C';
    return 'F';
  }
}

const s1 = new Student('Alice', [95, 88, 92]);
const s2 = new Student('Bob', [70, 75, 68]);
const s3 = new Student('Charlie', [50, 45, 55]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());
