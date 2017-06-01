/*
Perform a search and replace on the sentence using the arguments 
provided and return the new sentence. First argument is the sentence to perform the 
search and replace on. Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", 
it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
  
  var toReplace = str.substr(str.indexOf(before), before.length).split("");
  
  if (toReplace[0].toUpperCase() == toReplace[0]) {
    after = after.split("")[0].toUpperCase() + after.substr(1);
  }
  
  return str.replace(before, after);
}
//test
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");








