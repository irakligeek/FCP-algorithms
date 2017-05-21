
/*
  Return the lowest index at which a value (second argument) 
  should be inserted into an array (first argument) once it has been sorted. 
  The returned value should be a number.
  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
  because it is greater than 1 (index 0), but less than 2 (index 1).
*/

function getIndexToIns(arr, num) {
  
  var index = 0;
  
  //sort the array 
  arr.sort(function(a,b){
    return a-b;
  });
  
  //increment index by one if num is greater than the array element
  for(var i=0; i< arr.length; i++){
    if(num > arr[i]){
      index ++;
    }
  }

  return index;
}

//test
getIndexToIns([3, 10, 5], 3);


