/*
============================================
; Title: discussion 5.3
; Author: Tiffany Baker
; Date: 6/25/2020
; Modified By:
; Description: This program demonstrates the
; use of arrays with the forEach function.
;===========================================
*/

//creates array
let composer = [
  {firstName:"Wolfgang",lastName:"Mozart",genre:"classical",rating:"9"},
  {firstName:"Johann",lastName:"Bach",genre:"classical",rating:"10"},
  {firstName:"Ravi",lastName:"Shankar",genre:"classical",rating:"8"},
  {firstName:"Elton",lastName:"John",genre:"pop",rating:"9"},
  {firstName:"Danny",lastName:"Elfman",genre:"new wave",rating:"9"}
];

//iterate over array
composer.forEach(function(person){console.log("First Name: "+person.firstName+" "
+"Last Name: "+person.lastName+" "+"Genre: "+person.genre+" "+"Rating: "+person.rating)});
