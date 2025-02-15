const symbol = Symbol("id");

const person = {
    name : "Soham",
    email : "sohamnimbalkar@gmail.com",
    [symbol] : "unique"
}

console.log(person[symbol]);