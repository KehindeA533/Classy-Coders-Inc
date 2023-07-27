const { Employees } = require("./classes/Employees");
const { Manager } = require("./classes/Manager");
const { SalesPerson } = require("./classes/SalesPerson");
const { SoftwareEngineer } = require("./classes/SoftwareEngineer");

// Run and debug your code here

//
// Employees
//
// const preston = new Employees("Preston", "Engineer", 100000);
// console.log(preston.getSalary()); // 100000
// preston.setSalary(105000);
// console.log(preston.getSalary()); // 105000
// console.log(preston.getStatus()); // true;
// preston.setStatus("fire");
// console.log(preston.getStatus()); // false;

//
// Manager
//

// const jenna = new Manager(
//   "Jenna",
//   "Head of Engineers",
//   120000,
//   "Software Engineering",
//   10
// );
// console.log(jenna.getEmployeesManaged()); // []
// const preston = new Employees("Preston", "Engineer", 100000);
// jenna.setEmployeesManaged(preston);
// console.log(jenna.getEmployeesManaged()); // [ Employee ]

//
// SalesPerson
//

//
// SoftwareEngineer
//

const programmer = new SoftwareEngineer(
  "Becca",
  "Senior Software Engineer",
  100000,
  ["JavaScript", "Java", "Python"]
);
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
programmer.setProgrammingLanguage("C#");
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"]

module.exports = {
  Employees,
  Manager,
  SalesPerson,
  SoftwareEngineer,
};
