/*
============================================
; Title: discussion 5.3
; Author: Tiffany Baker
; Date: 6/25/2020
; Modified By:
; Description: This program demonstrates the
; use of arrays with the forEach and map function.
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

/*
----------------------------------------------------------------------------------
expected output:

composer
genre


composer
rating
----------------------------------------------------------------------------------
*/


let lastNames = composer.map(function (person) {

  return person.lastName
  return person.genre
  return person.rating

        });


//sorts array by compose and genre or rating
console.log("--composer by genre--");

composer.forEach(function(person){console.log("Composer: "+
person.lastName + "\n" + "Genre: " + person.genre + "\n")});

console.log("--composer by rating--");

composer.forEach(function(person){console.log("Composer: "+
person.lastName + "\n" + "Rating: " + person.rating+ "\n")});

