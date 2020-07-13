/*
============================================
; Title: exercise 7.2
; Author: Tiffany Baker
; Date:7/12/2020
; Modified By:
; Description: this program demonstrates the
; use of constructor functions.
;
;===========================================
*/


const header = require('../baker-header.js');

console.log(header.display("Tiffany", "Baker", "assignment 7.2"));
console.log("");

//employee function created
function Employee(id, firstName, lastName, title){

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;

}

//array
const employees = [
  new Employee('245','George','Berk','Security'),
  new Employee('246','Mary','Smith','Waitress'),
  new Employee('247','Amy','Jones','Security'),
  new Employee('248','Anthony','Mitchell','Bartender'),
  new Employee('249','Mark','Nicky','Host')
];

// output


let index = 1
for (let i = 0; i < employees.length; i++) {
  console.log(index +". " + employees[i].id+ " " + employees[i].firstName+" "+
  employees[i].lastName+" " + employees[i].title)
  index++
}

