/* Write a function that takes two or more arrays and returns a new array of unique
 values in the order of the original provided arrays.
In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order. Check the assertion tests for examples.
*/

function uniteUnique(arr) {
  //get the first parameter to compare arrays to
  var arr1 = arguments[0];
  //loop through arguments
  for(var i=1; i<arguments.length; i++){
    var arg = arguments[i];
    //loop through each argument array
    for(var y=0; y<arg.length; y++){
      while(arr1.indexOf(arg[y]) != -1){
        arg.splice(y, 1);//remove all dublicates from current argument
      }
    }
    arr1 = arr1.concat(arg);//concatenate arrays with no dublicates
  }
  return arr1;
}
//test
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

