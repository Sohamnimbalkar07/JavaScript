var name = "Atharv";
var age = 19;
function test() {
   function test1() {
    console.log(`name is ${this.name} and age is ${this.age}`);
   }
   test1();
}

test();