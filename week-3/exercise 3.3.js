/*
============================================
; Title: exercise 3.2
; Author: Tiffany Baker
; Date: 6/25/2020
; Modified By:
; Description: This program demonstrates the
; use of functions and switch statements.
;===========================================
*/


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


const choice = e;
  switch (e) {
    case c:
      console.log(logMatch(choice, c));
      break;

    case d:
      console.log(logMatch(choice, d));
      break;

    case f:
      console.log(logMatch(choice, f));
      break;

    case g:
      console.log(logMatch(choice, g));
      break;

    case h:
      console.log(logMatch(choice, h));
      break;

    default:
      console.log(logMismatch(choice,));
      break;


  }

