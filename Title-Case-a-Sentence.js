
function titleCase(str) {
  
  //break the string into an individual words array
  var arr = str.split(" ");
  var upperCase =[];
  //loop through the array of words
  for(var i=0; i<arr.length; i++){
    
    //Capitalize each word's first letter and add them to upperCase array
    upperCase.push( arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    
  }
  
//   console.log(upperCase.join(" "));
  return upperCase.join(" ");
  
}

titleCase("I'm a little tea pot");
