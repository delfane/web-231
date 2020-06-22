/*
============================================
; Title: exercise 4.3
; Author: Tiffany Baker
; Date: 6/21/2020
; Modified By:
; Description: This program demonstrates the
; use of arrays and matching a string to it.
;===========================================
*/

//creates an array.

const vehicles = ["taurus","dump truck","volvo","kona","pickup"];

//cycles through a array
function getValue (ary, a){
  for (var i=0; i < ary.length; i++){
    //if statement used to log the values if they match
    if (a===ary[i]){
      console.log(ary[i]);
    }
  }
  }
//cycles through the arry and matches
for (var n=0; n < vehicles.length; n++)
console.log(vehicles[n]);
console.log("");
getValue(vehicles, "volvo");
