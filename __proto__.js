// let myName = "Soham     "
// let mychannel = "Nimbalkar     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.soham = function(){
    console.log(`soham is present in all objects`);
}

Array.prototype.heySoham = function(){
    console.log(`soham says hello`);
}

// heroPower.soham()
// myHeros.soham()
// myHeros.heySoham()
// heroPower.heySoham()

// inheritance

const User = {
    name: "soham",
    email: "soham@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JavaScript',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Soham     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Soham".trueLength()
"Nimbalkar".trueLength()
console.log(TASupport.isAvailable);