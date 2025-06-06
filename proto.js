const p1 = {
    a : "Soham",
    b : "Nimbalkar"
}

const p2 = Object.create(p1);

p2.__proto__.name = "Hack"
p2.__proto__.a = "Hacked A"
console.log(p2.a, p1.a, p1);