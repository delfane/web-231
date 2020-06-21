/*
============================================
; Title: exercise 4.2
; Author: Tiffany Baker
; Date: 6/19/2020
; Modified By:
; Description: This program demonstrates the
; use of arrays.
;===========================================
*/

//creates an array.
const fruit= ["apple","orange","grape","peach","dragon fruit"];
function getFruit (ary) {
  //cycles through array.
  for (var i=0; i < ary.length; i++){
  console.log(ary[i]);
  }
}

getFruit(fruit);
