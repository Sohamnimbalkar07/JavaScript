const nums = [1, 2, 3, 4, 5];

const check = nums.includes(1);
console.log(check);

nums.forEach((i) => {
  console.log(i);
});

const doubled = nums.map((i) => i * 2);

console.log(doubled);
console.log(nums);

const even = nums.filter((i) => i % 2 == 0);

console.log(even);

const total = nums.reduce((total, i) => (total = total + i));

console.log(total);
