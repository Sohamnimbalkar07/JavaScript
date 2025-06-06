const map = new Map([
  ["bananas", 300],
  ["oranges", 200],
  ["apples", 500]
]);

map.set(1, "Soham");
map.set(2, "Mayur");
map.set(3, "Mohit");

// map.delete(1);

for (const [key, value] of map) {
  console.log(key, value);
}

const a = map.get(2);
console.log(a);

const b = map.has("Soham");
console.log(b);
