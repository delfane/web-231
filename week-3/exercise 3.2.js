
var c = "1";
var d = "2";
var e = "3";
var f = "4";
var g = "5";
var h = "6";


var word = [d,h,e,g,c,f];

//cycles through each variable.

if (word.length<=6){
  match(d,d);
  match(e,h);
  match(g,c);
  match(f,f);
  match(f,h);

}



//------------------------------------------------
//function to judge if string match

function match (a,b) {

if (b === a) {
  console.log("true");
  return logMatch(a,b);
} else {
  console.log("false");
  return logMismatch(a,b);
}
}




// gives a message if the variables do not match.
function logMismatch (a,b) {
  var misMatch = "Sorry but " + a + " and " + b + " do not match.";
  console.log(misMatch);
}


// gives a message if the variables do match.
function logMatch (a,b) {
  var doMatch = "Congrats " + a + " and " + b + " do match.";
  console.log(doMatch);
}





