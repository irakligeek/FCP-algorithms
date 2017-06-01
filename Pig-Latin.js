/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var arr = str.split("");
  var index;
  
  for(var i=0; i<vowels.length; i++){
    if(str.charAt(0) === vowels[i].toLowerCase()){
       return str + "way";
    }
  }
  
  for(var y=0; y<arr.length; y++){
      if( vowels.indexOf(arr[y]) !== -1){
        index = str.indexOf(arr[y]);
        break;
      }
  }
  
  return str.substr(index) +  str.substr(0, index) + "ay";
}

//test
translatePigLatin("eight");
