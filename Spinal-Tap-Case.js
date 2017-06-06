/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
  
  //fist deal with the Camel case strings
  str = str.split(/(?=[A-Z])/).join(" ");
  //create patterns that will be replaced
  var patterns = [/_+/g, /\s+/g,/-+/g];
  
  for(var i=0; i<patterns.length; i++){
    if(patterns[i].test(str)){
      str = str.replace(patterns[i], '-');
    }
  }
  
  return str.toLowerCase();
}

//test
spinalCase('AllThe-small Things');