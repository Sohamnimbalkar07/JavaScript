const hero = ["IronMan", "CaptainAmerica", "Thor"];

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    score++;
}

createUser.prototype.printMe = function() {
   console.log(`the score of user is ${this.score}`);
}

const u1 = new createUser("Soham", 24);
const u2 = new createUser("Mayur", 25);

u1.printMe();
u2.printMe();

