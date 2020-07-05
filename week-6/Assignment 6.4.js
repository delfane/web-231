/*
============================================
; Title: exercise 6.4
; Author: Tiffany Baker
; Date:7/4/2020
; Modified By:
; Description: this program demonstrates use of nested object literals
;
;===========================================
*/


const header = require('../baker-header.js');

console.log(header.display("Tiffany", "Baker", "Exercise 6.2"));

const ticket = {
  id: "582",
  name: "Mark George",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "high"
}

const fields = {
  id: "62",
  firstName: "Micheal",
  lastName: "Blue",
  jobTitle: "District Manager"

}

console.log("Ticket "+ ticket.id+" was created on "+ticket.dateCreated+
" and assigned to employee "+fields.firstName+" "+fields.lastName+" ("+fields.jobTitle+")");
//ticket (42) was created on (todays date) and assigned to employee (employee name) <(job title)>
