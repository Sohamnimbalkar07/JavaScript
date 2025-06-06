class Student {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name;
  }
}

const s1 = new Student("Soham")

console.log(Object.getOwnPropertyNames(s1.__proto__));
console.log(Object.getOwnPropertyNames(Student.prototype));
