/*
Check if the predicate (second argument) is truthy on all
 elements of a collection (first argument).
 Remember, you can access object properties through
 either dot notation or [] notation.*/
function truthCheck(collection, pre) {
 
  var counter = 0;
  //if match found increment counter
  collection.filter( function(el, index){
    if (el[pre]) { counter++; }
 
  } );
 
  //if counter is uqual to collection length, all elements passed test, return true. else return false
  return counter === collection.length;
}
 
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
 