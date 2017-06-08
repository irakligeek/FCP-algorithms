/*
Return an English translated sentence of the passed binary string.
*/
function binaryAgent(str) {
 
  var  newStr = [];
 
  str.split(" ").filter(function(el,index){
    newStr.push( String.fromCharCode( parseInt(el, 2) ) );
  });
 
   return newStr.join("");
}
//test
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");