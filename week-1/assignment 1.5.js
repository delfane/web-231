/*
============================================
; Title: Assignment 1.5
; Author: Tiffany Baker
; Date: 6/11/2020
; Modified By: tiffany Baker
; Description: This program demonstrates the
; use of JavaScript values and
; and variables in a small employee record.
;===========================================
*/

//variables to be used with strings of text.
var firstName1="Jordan ";
var firstName2="Amber";
var firstName3="Indie";
var lastName1="Jones";
var lastName2="Barns";
var lastName3="Wright";
var address1="123 jump rd";
var address2="3953 ashland";
var address3="908 evens st";
var payRate1a=25;
var payRate2a=18;
var payRate3a=09;

//formats date with slashes.
function hireDate1() {
  var hireDate1a= new Date(10,21,1953);
  var n = hireDate1a.toLocaleDateString();
  return n;
}

function hireDate2() {
  var hireDate2a= new Date(04,05,2020);
  var n = hireDate2a.toLocaleDateString();
  return n;
}

function hireDate3() {
  var hireDate3a= new Date(12,25,2010);
  var n = hireDate3a.toLocaleDateString();
  return n;
}

//formats variable to 1 decimal place.
var payRate1= payRate1a.toFixed(1);
var payRate2= payRate2a.toFixed(1);
var payRate3= payRate3a.toFixed(1);

//output
console.log(firstName1,lastName1,address1,payRate1,hireDate1());
console.log(firstName2,lastName2,address2,payRate2,hireDate2());
console.log(firstName3,lastName3,address3,payRate3,hireDate3());

