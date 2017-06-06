/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible 
by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  //noprotect
  
  //sort array first. so lower comes first
  arr = arr.sort(function(a,b){ return a>b; });
  //create range array 
  var range = []; var start = arr[0]+1;
  while(start < arr[1]){ range.push(start++);}
  
  var count = 1; var flag = true; 
  var common; var rangeCount;
  
  //increment count by one before we find common multiple
  while(flag){
    rangeCount=0;
    if(count % arr[0] === 0 && count % arr[1] === 0){ //common multiple found, assyign it to commont variable
      common = count;
    }
    //Now loop through the range array and check if our common multiple is divided to all of them evenly
    for(var i = 0; i < range.length; i++){
      if(common % range[i] === 0){
        rangeCount++;//count every match
      }
      if(rangeCount === range.length){//if all match, set while flag to false, 
        //we found commont multiple that is evenly divided by sequential numbers in the range
          flag = false;
      }
    }
    count++;
  }
  
  return common;
}

//test
smallestCommons([23, 18]);

