const userWithArrow = {
  name: "Bob",
  showName: () => {
    console.log(this.name);
  }
};

userWithArrow.showName();

const userWithNormalFunction = {
  name: "Bob",
  showName: function() {
    console.log(this.name);
  }
};

userWithNormalFunction.showName();
