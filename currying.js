const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

// const filtering = item => item.name !== name;

// const filterByName = (list, name) => {
//   return list.filter(filtering);
// }

// const result = filterByName(list, "Steve");
// console.log(result);                          //error

// function filterByName(list, name) {
//   return list.filter(
//     (function (givenName) {
//       return function (item) {
//         return item.name !== givenName;
//       };
//     })(name)
//   );
// }

// console.log(filterByName(list, "Liz"));

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 2));

const add = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(add(1)(2));

// =======================================================

const filtering = (name) => (item) => item.name !== name;

const filterByName = (list, name) => {
  return list.filter(filtering(name));
}

console.log(filterByName(list, 'John'));

// ==========================================================

const getCakeIngredients = (ingred_1) =>{
    return (ingred_2) => {
        return (ingred_3) => {
            return `${ingred_1}, ${ingred_2}, ${ingred_3}`; 
        } 
    } 
} 

getCakeIngredients('Eggs')('flour')('milk');
