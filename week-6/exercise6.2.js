/*
============================================
; Title: exercise 6.2
; Author: Tiffany Baker
; Date:7/4/2020
; Modified By:
; Description: this program demonstrates exception handling.
;
;===========================================
*/


const header = require('../baker-header.js');

console.log(header.display("Tiffany", "Baker", "exercise 6.2"));



//code catches the error and outputs a message.
try{
  //variables
  var a = "10";
  var b = "12"
  var err = console.log("catch clause: Sorry you cant do that...");


if(a !== b) throw "error";

}
catch(err){


}
finally{
  console.log("Finally clause reached");

}


