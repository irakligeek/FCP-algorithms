/*
	Return the remaining elements of an array after chopping off n elements from the head.
*/
function slasher(arr, howMany) {
  
  if(howMany > 0){
    
    for(var i=0; i<howMany; i++){
      arr.splice(0, 1);
    }
    return arr;
  }
  
  return arr;
  
}

//Test
slasher([1, 2, 3], 9);
