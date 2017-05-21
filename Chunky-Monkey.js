/*
  Write a function that splits an array (first argument) into groups the length of size  
  (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {

  var chunk   = [];
  var chunks  = [];
  var index   = 0;
  
  for (var i=0; i<arr.length; i++){
    
    chunk.push(arr.slice(index, index+size));
    index+=size;
  }

  for (var y=0; y<chunk.length; y++){
    //clean our array from empty arrays
    if(chunk[y].length !== 0){
      chunks.push(chunk[y]);
    }

  }
  
  return chunks;
}

//test
chunkArrayInGroups(["a", "b", "c", "d"], 2);





