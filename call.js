function setUsername(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser("Soham", "soham@gmail.com", "123456");
console.log(user);