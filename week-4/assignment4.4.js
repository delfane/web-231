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
//created array
const state = ["iowa", "utah","texas","new york","ohio"];

//matches array
function getState (ary,a){
  for (var i=0; i < ary.length; i++){
    if (ary[i]===a){
      console.log("true");
    }
  }
}
//filters array
let filterState = state.filter(function(e){
  return e === "texas";

});

//output
console.log(state);
console.log("");
console.log(state.sort());
console.log("");
console.log(filterState);

