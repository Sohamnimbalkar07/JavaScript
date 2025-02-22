// const user = {
//     userName : "Soham",
//     welcomeMessage : function() {
//         userName : "Nimbalkar",
//       console.log(`welcome ${this.userName}`);
//     }
// }

// user.welcomeMessage();

// const name1 = "Soham";
// const arrow = () => {
//     // name : "Nimbalkar"
//     console.log(this);
// }

// arrow();

global.name = "Soham";
function f1() {
    console.log(this.name);
}

f1()