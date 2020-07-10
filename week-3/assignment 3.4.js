/*
============================================
; Title: Assignment 3.4
; Author: Tiffany Baker
; Date:7/8/2020
; Modified By:
; Description:this program demonstrates the use of loops
;
;===========================================
*/


const header = require('../baker-header.js');

console.log(header.display("Tiffany", "Baker", "assignment 3.4"));


//variables
var chosenNumber = 4;

//


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
  return a + " and " + b + " do not match!";
}

// gives a message if the variables do match.
function logMatch (a,b) {
  return a + " and " + b + " do match!";
}

//output

console.log("--Do The Numbers Match Game--")

//for loop that sweeps through 10 times
for(i = 0; i < 10; i++){
  //creates random number
  function randomNumber() {
    return Math.floor((Math.random() * 10) + 1);

  }

   if(match(chosenNumber,randomNumber())){
     console.log(logMatch(chosenNumber,randomNumber()));
   }else{
     console.log(logMismatch(chosenNumber,randomNumber()));
   }
}

