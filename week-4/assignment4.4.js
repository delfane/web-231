/*
============================================
; Title: exercise 4.4
; Author: Tiffany Baker
; Date: 6/21/2020
; Modified By:
; Description: This program demonstrates the
; use of arrays and filtering.
;===========================================
*/

const state = ["iowa", "utah","texas","new york","ohio"];

function getState (ary,a){
  for (var i=0; i < ary.length; i++){
    if (ary[i]===a){
      console.log("true");
    }
  }
}

let filterState = state.filter(function(e){
  return e === "texas";

});


console.log(state);
console.log("");
console.log(state.sort());
console.log("");
console.log(filterState);

