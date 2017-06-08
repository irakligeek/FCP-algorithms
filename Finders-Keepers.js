
/*
Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a 
truth test (second argument).
*/

function findElement(arr, func) {
  //decalre an array to store all value that pass the test
  var arr2 = [];
  
  // add all values that pass the test on func
  arr2 = ( arr.filter(function(el){
    return func(el) ? arr2.push(el) : "";
  }) );
  
  //return first element that passed the test, if it didn't pass the test 
  //it will return undefined - exactly what we need!
  return arr2[0];
}
//test
findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });
