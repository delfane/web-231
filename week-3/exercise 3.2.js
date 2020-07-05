/*
============================================
; Title: exercise 3.2
; Author: Tiffany Baker
; Date: 6/25/2020
; Modified By:
; Description: This program demonstrates the
; use of functions and if else statements.
;===========================================
*/

const header = require('../baker-header.js');

console.log(header.display("Tiffany", "Baker", "exercise 3.2"));

//variables
var c = "1";
var d = "2";
var e = "3";
var f = "3";
var g = "5";
var h = "6";


//creates function called match to compare values
function match (a,b) {

    if (b === a) {
      return true;
    } else {
      return false;
    }
}


// gives a message if the variables do not match.
function logMismatch (a,b) {
    console.log(a + " and " + b + " do not match!");
  }

// gives a message if the variables do match.
function logMatch (a,b) {
    console.log(a + " and " + b + " do match!");
  }



  //output
  console.log(match("a","b"));
  console.log(match(1,1));



  if (match(c,d)){
      logMatch(c,d);
  }else{
      logMismatch(c,d);
  }

  if (match(e,f)){
    logMatch(e,f);
}else{
    logMismatch(e,f);
}

if (match(g,h)){
    logMatch(g,h);
}else{
    logMismatch(g,h);
}



