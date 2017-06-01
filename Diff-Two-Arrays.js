/*
Compare two arrays and return a new array with any items only found
 in one of the two given arrays, but not both. In other words, 
 return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var diff1, diff2;
  
  if(arr1.length < 1){
    newArr = arr2;
  }
  if(arr2.length < 1){
    newArr = arr1;
  }
  
  diff1 = arr2.filter(function(i){
    return arr1.indexOf(i) < 0;
  });
  diff2 = arr1.filter(function(i){
    return arr2.indexOf(i) < 0;
  });
  
  return diff1.concat(diff2);
}

//test
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
