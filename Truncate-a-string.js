/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
  
  if(num <= 3){
    return str.substr(0, num) + "...";
  }
  
  if(str.length > num){
    return str.substr(0, num-3) + "...";
  }
   
  return str;
}

//test
truncateString("A-", 1);
