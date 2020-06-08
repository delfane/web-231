/*
============================================
; Title:  exercise 2.3
; Author: Tiffany Baker
; Date:   6/7/2020
; Modified By: Tiffany Baker
; Description: creating name function
;===========================================
*/

/*
  Expected output:
  first name last name

*/
myName.Tiffany = "Tiffany Baker"; //creates function property

//function with 0 parameter
function myName() {
  return myName.Tiffany;
}


console.log(myName());



