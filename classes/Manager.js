const { Employees } = require("./Employees");
class Manager extends Employees {
  #employeesManaged;
  constructor(name, postion, salary, department) {
    super(name, postion, salary);
    this.department = department;
    this.#employeesManaged = [];
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

module.exports = {
  Manager,
};
