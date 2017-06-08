/* Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements 
of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.
*/
function dropElements(arr, func) {
  
  //find the first element that passed the test
  var match = arr.filter(function(el,index){
    return func(el) ? el : "";
  })[0];
  
  //slice array starting from the first matched element and return it, 
  //or empty array if no matches at all
  return match === undefined ? [] : arr.slice( arr.indexOf(match) );
   
}

//test
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
