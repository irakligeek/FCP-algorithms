
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

  var strArr = str.split("");
  
  for(var i=0; i<strArr.length; i++){
    var code = str.charCodeAt(i);
    if( code !== str.charCodeAt(0) + i){
      return String.fromCharCode(code -1);
    }
    
  }
  
  
  return undefined;
}
//test
fearNotLetter("abd");
