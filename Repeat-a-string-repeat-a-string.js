/* Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number. */
function repeatStringNumTimes(str, num) {

  var strRepeated = "";
  
    for(var i=0; i<num; i++){
      strRepeated +=  str;
    }

   return strRepeated;
}

//test
repeatStringNumTimes("*", 2);
