/*
============================================
; Title:  assignment 2.4
; Author: Tiffany Baker
; Date:   6/7/2020
; Modified By: Tiffany Baker
; Description: creating name, date and number conversion functions
;===========================================
*/

/*
expected output:
  FirstName LastName
  Date
  formatted number
  number converted to integer
  number converted to float

*/
//strings together first and last name
function fullName(firstName, lastName){
  var firstName="Tiffany "
  var lastName="Baker"
  return firstName+lastName;
}

//strings together pre-entered date
function dateWriter(year,month,day){
  var year="/2020";
  var month= "04";
  var day= "/28";
  return month+day+year;
}

//truncates number by 2 positions
function formatNumber(number,numOfFixedPositions){
  var number=1022.039;
  var numOfFixedPositions= number.toFixed(2);
  return numOfFixedPositions;
}

//converts number to integer
function convertToInt(a){
  var a = parseInt("10.00");
  return (a);
}

//converts number to float
function convertToFloat(b){
  var b = parseFloat("100.00");
  return (b);
}

console.log(fullName());
console.log(dateWriter());
console.log(formatNumber());
console.log(convertToInt());
console.log(convertToFloat());
