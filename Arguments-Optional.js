
function addTogether() {
/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/
  
  if(arguments.length > 1){//we have two arguments
    if(typeof arguments[0] !== 'number' || 
      typeof arguments[1] !== 'number' ){
      return undefined;
    }else{
      return arguments[0] + arguments[1];
    }
  } else { //we have only one argument
    var arg1 = arguments[0];
    if(typeof arguments[0] !== 'number') {
      return undefined;
    }else{
      return function(n){
        if(typeof n !== 'number' || typeof arg1 !== 'number'){
          return undefined;
        }else{
          return arg1 + n; 
        }
      };
    }
  }
  
}

//test
addTogether(2)([3]);
addTogether(2, 3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");


