/*
============================================
; Title: exercise 6.3
; Author: Tiffany Baker
; Date:7/4/2020
; Modified By:
; Description: this program demonstrates use of object literals
;
;===========================================
*/


const header = require('../baker-header.js');

console.log(header.display("Tiffany", "Baker", "Exercise 6.2"));

//creates  ticket object
const ticket = {
  id: "48453",
  name: "George Anthony",
  requestor: "Mark W."

}

//output
console.log(ticket);
