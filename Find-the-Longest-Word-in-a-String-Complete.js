// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  
  var arr = str.split(" ");//split sentence to an array
  var longestWord = arr[0];//assume longest word is the first word of an array
  for (var i=0; i< arr.length; i++){ //iterate through array of words
    
    if(arr[i].length > longestWord.length){
      //compare other words of an array if they are longer than the first one
      longestWord = arr[i];
    }
  }
  return longestWord.length;//return length of the longest word
  
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");

