function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.sayDepartment = function() {
  console.log(this.department);
};

function Professor(name, department, title) {
  Faculty.call(this, name, department);
  this.title = title;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.sayTitle = function() {
  console.log(this.title);
};

const prof = new Professor("Dr. Das", "Physics", "Associate Professor");
prof.sayTitle();
prof.sayDepartment();
prof.sayName();
