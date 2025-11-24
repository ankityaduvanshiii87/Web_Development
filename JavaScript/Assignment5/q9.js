class PersonClass {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  printBranch() {
    console.log(this.branch);
  }
}

const sc = new StudentClass("Asha", "Mathematics");
sc.printName();
sc.printBranch();

function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.printName = function() {
  console.log(this.name);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.printBranch = function() {
  console.log(this.branch);
};

const sp = new StudentProto("Asha", "Mathematics");
sp.printName();
sp.printBranch();
