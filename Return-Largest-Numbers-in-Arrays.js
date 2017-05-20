
function largestOfFour(arr) {
  
  //array for storing largest numbers
  var largestArr = [];
  var largest = 0;//create largest number to have something to compare to
  //Loop through an array 
  for(var i=0; i< arr.length; i++){
    //loop through an indicidual numbers of each array
    for(var y=0; y< arr[i].length; y++){
      //compare each number to our largest number declared earlier
      if(arr[i][y] > largest){
        largest = arr[i][y];
      }
      
    }
    
    largestArr.push(largest);//add largest number to an array
    largest = 0;//reset largest number for the next loop phase
  }
  return largestArr;
}

//test
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
