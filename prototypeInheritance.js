function Dog() {}

Dog.prototype.bark = function () {
  console.log("woof");
};

const fido = new Dog();
fido.bark();

var parent = {
  foo: function () {
    console.log("bar");
  },
};
var child = Object.create(parent);
child.hasOwnProperty("foo");
child.foo();