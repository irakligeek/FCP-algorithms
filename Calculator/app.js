(function(){ 
 
  var operators = ['+', '-', '/', '*'];//operators
  
  //validate users inputs
  $('#calc-input').on('input', function(e){
    var input = this.value;
    //update display field;
    $('#display-panel').html(input);
    
    //loop through inputs
    for(var x=0; x<input.length; x++){
      var char = input.charAt(x);//char to check against
      if( isNaN(char) && operators.indexOf(char)  === -1 && char !== '.'){//validate inputs
        alert('Only numbers are allowed');//alert
        $('#calc-input').val('');//reset input field
        $('#display-panel').html('');//reset display field
        return;
      }
      //check for dublicate arithmetic operators
      if( operators.indexOf(char)  !== -1 ){//we have operator in the input
        var prevChar = input.charAt(x-1);
        if( operators.indexOf(prevChar) !== -1){//we have dublicate arithemtic operator
          //create new value removing last character
          input = input.substring(0, input.length-1);
          $('#calc-input').val(input);//replace input value
          $('#display-panel').html(input);//replace input value
        }
      }
    }//for loop
  });//on input
  
  //display results
  $('#calculate').on('click', function(e){
    //store input
    var math =  $('#calc-input').val();
    if(math === ""){
      $('#display-panel').html(0);//display result  
    }else{
      $('#display-panel').html(math + ' = ' + eval(math) );//display result  
    }
    
    
    $('#calc-input').val('');//reset input field
  });
  
  $('#calc-input').on('keyup', function(e){
    if(event.keyCode == 13){
      $("#calculate").click(); 
    }
  });
  
  //reset fields
  $('#reset').click(function(){
      $('#calc-input').val('');//reset input field
      $('#display-panel').html(0);//reset display field
      math = [];//reset math array
  });
  
})();