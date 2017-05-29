/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  //sort array so lowest comes first
  arr.sort(function(a,b){
    return b < a;
  });
  
  //create sum variable and assyign total sum of arr to it
  var sum = arr.reduce(function(acc, num){
    return acc + num;
  });
  //check if we need to add the sum of number between first and last element of an array
  if(arr[0] !== arr[1]){
    //create second array to store numbers between first and last element of an array
    var arr2 = [];
    var index = arr[0]+1;//set the index
    
    while(index < arr[1]){
      arr2.push(index);//add between numbers to arr2
      index++;
    }
    //assyign sum of arr to sum of arr2
    sum += arr2.reduce(function(acc, num){
      return acc + num;
    });
  }
  
  return sum;
}
//test
sumAll([1, 4]);
