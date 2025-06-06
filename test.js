var name = "Atharv";
var age = 19;
function test() {
   var name  = "Soham"
   var age = 15;
   function test1() {
    console.log(`name is ${this.name} and age is ${this.age}`);
   }
   test1();
}

test();

console.log("a = ", a);

var a = 10;