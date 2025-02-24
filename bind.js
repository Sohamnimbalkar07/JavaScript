const person = {
    firstName:"Soham",
    lastName: "Nimbalkar",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"mayur",
    lastName: "Godase",
  }
  
  let bind = person.fullName.bind(member);
  let call = person.fullName.call(member);
  console.log("bind", bind());
  console.log("call", call);

