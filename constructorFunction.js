const sum = new Function("a", "b", "console.log(a+b)");

sum(8,2);

// constructor function
function Person () {
    this.name = "John",
    this.age = 23
}

// create an object
const person = new Person();

// print object attributes
console.log(person.name);
console.log(person.age);

// Output:
// John
// 23