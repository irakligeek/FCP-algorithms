/*Flatten a nested array. You must account for varying levels of nesting.*/
function steamrollArray(arr) {
 
  var flat = [];
  function flatten (a){
    for (var i=0; i<a.length; i++){
      //if array contains array, push loop and call by calling the function again and passing nested array as a parameter
      if(Array.isArray(a[i])){
        flatten(a[i]);
      }else{
        //if its not a nested array push it to the flat array variable
        flat.push(a[i]);
      }
    }
    return flat;
  }
 
//   console.log(flat);
  return flatten(arr);
}
 
//test
steamrollArray([1, [], [3, [[4]]]]);