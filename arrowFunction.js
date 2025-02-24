global.name = "Soham";

const person = {
  name: "Nimbalkar",
  skills: ["HTML", "CSS", "JavaScript"],

  showSkills() {
    this.skills.forEach(function (skill) {
      console.log(`${this.name} is skilled in ${skill}`);
    });
  },
};

person.showSkills();
