// Your code here
class Cat {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender
  }
  speak: () => `${this.name} says meow!`;
}

class Dog {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender
  }
  speak: () => `${this.name} says woof!`;
}

class Bird {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender
  }
  speak: () => {
    if (this.gender === "male") {
      return 
    }
  }`${name} says squawk!`;
}
