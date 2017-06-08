/*
Return true if the string in the first element of the array contains all of the letters of the
 string in the second element of the array.

For example, ["hello", "Hello"], should return true because all 
of the letters in the second string are present in the first, ignoring case.
*/

function mutation(arr) {
  
  var wordToCompare = arr[1].toLowerCase();
  var wordToCheck = arr[0].toLowerCase();
  var countMatch = 0;
  
  for(var i=0; i<wordToCompare.length; i++){
      //ceck if the letter from second string match any letter from the first string
      if(wordToCheck.indexOf(wordToCompare[i]) !== -1){
         countMatch++;//count matches
      }
  }
  //check if all the letter from the wordToCompare matched
  if(countMatch === wordToCompare.length){
     return true;
  }
  return false;
}
//test
mutation(["hello", "hey"]);
