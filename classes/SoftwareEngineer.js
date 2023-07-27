const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
  #programmingLanguages;
  constructor(name, postion, salary, programmingLanguages) {
    super(name, postion, salary);
    this.#programmingLanguages = programmingLanguages;
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  setProgrammingLanguage(language) {
    this.#programmingLanguages.push(language);
  }
}

module.exports = {
  SoftwareEngineer,
};
