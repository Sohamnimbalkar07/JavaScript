const a = [ "Soham", "Nimbalkar", "Software Engineer" ]
// a.unshift("I am");
// for(var i = 0 ; i < a.length; i++) {
//     console.log(a[i]);
// }

// a.pop();
// a.push(24);
// a.shift();

// delete a[1];
// const b = a.join();
// console.log(a.toString());

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const citrus = fruits.slice(1, 3);

// console.log(citrus);

// const fruits = [ "Banana", "Orange", "Apple", "Mango" ];
// fruits.splice(2, 1, "Lemon", "Kiwi");

// console.log(fruits);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
// console.log(position);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);
