/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  var entities = {'&amp;':/&/, '&lt;':/</g, '&gt;':/>/g,'&quot;': /"/g, '&apos;': /'/g};
  
  for(var ent in entities){
    var pattern = entities[ent];
    if( pattern.test(str)){
      str = str.replace(pattern, ent);
    }
  }
  
  return str;
}

//test
convertHTML('<>');

