const person1 = {
  name: "Soham",
  age: 18,
  greet: function () {
    console.log("the name of person is", this.name, "and age is", this.age);
  },
};

const person2 = {
  name: "Atharv",
  age: 10,
};

person1.greet.call(person2);

function test(age) {
  console.log("the name of person is", this.name, "and age is", age);
}


test.call(person2, 20);


function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"

